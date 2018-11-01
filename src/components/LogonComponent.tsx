import * as React from 'react';
import { connect } from 'react-redux'
import * as Redux from "redux";
import * as actions from "../actions";

import { ISession, IState } from '../IState'

// tslint:disable-next-line:no-empty-interface
export interface IOwnProps {
}

// tslint:disable-next-line:no-empty-interface
interface IStateProps {
    currentSession: ISession | null
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
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Username
                            </td>
                            <td>
                            <input id="username" type="text" onChange={ this.usernameChanged } />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password
                            </td>
                            <td>
                                <input id="password" type="password" onChange={ this.passwordChanged } />
                            </td>
                        </tr>
                        <tr>
                            <td  colSpan={2}>
                                <button id="logonButton" onClick={ this.logonClick }>Logon</button>
                            </td>
                        </tr>
                        <tr>
                            <td  colSpan={2}>
                                <span id="logonMessage">"Not implemented"</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
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