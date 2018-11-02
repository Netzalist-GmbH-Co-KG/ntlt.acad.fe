import * as React from 'react';
import { connect } from 'react-redux'
import * as Redux from "redux";
import * as actions from "../actions";

import { ISession, IState } from '../state/IState'

// tslint:disable-next-line:no-empty-interface
export interface IOwnProps {
}

// tslint:disable-next-line:no-empty-interface
interface IStateProps {
    currentSession: ISession
}

interface IDispatchProps {
  tryLogon: (u: string, p: string) => void,
}

type Props = IStateProps & IDispatchProps & IOwnProps

interface IInternalState {
    username: string,
    password: string
}

class LogonComponent extends React.Component<Props, IInternalState> {

    constructor(props: Readonly<Props>){
        super(props);
        this.state = { username: "", password:""};
    }

    public render() {
        return (
            <div className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input onChange={this.usernameChanged} type="text" id="username" className="form-control" placeholder="Email address" required={true} autoFocus={true} />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input onChange={this.passwordChanged} type="password" id="password" className="form-control" placeholder="Password" required={true} />
                <button id="logonButton" className="btn btn-lg btn-primary btn-block" onClick={this.logonClick}>Sign in</button>
                <label className="badge badge-danger">{this.props.currentSession.lastLogOnErrorMessage}</label>
            </div>
        );
    }

    private usernameChanged = (ev: any) => {
        this.setState( { username: ev.target.value });
    }

    private passwordChanged = (ev: any) => {
        this.setState( { password: ev.target.value });
    }

    private logonClick = () => {
        this.props.tryLogon(this.state.username, this.state.password);
    }
}

function mapStateToProps(state: IState, ownProps: IOwnProps): IStateProps {
    return {
      currentSession: state.currentSession,
    }
  }
  
  const mapDispatchToProps = (dispatch: Redux.Dispatch): IDispatchProps => 
    Redux.bindActionCreators( 
      { 
        tryLogon: actions.tryLogon,
      }, dispatch)
  
  
  export default connect<IStateProps, IDispatchProps, IOwnProps>
    (mapStateToProps, mapDispatchToProps)(LogonComponent)