import * as React from 'react';
import { connect } from 'react-redux'
import * as Redux from "redux";
import * as actions from "../actions";

import { ISession, IState } from '../state/IState'

// tslint:disable-next-line:no-empty-interface
export interface IOwnProps {
}

interface IStateProps {
    currentSession: ISession
}

interface IDispatchProps {
    logout: () => void,
}

type Props = IStateProps & IDispatchProps & IOwnProps

interface IInternalState {
    username: string,
    password: string
}

class SessionInfoComponent extends React.Component<Readonly<Props>, IInternalState>{

    constructor(props: Readonly<Props>) {
        super(props);
    }

    public render() {
        const content = !this.props.currentSession.isLoggedIn ?
            (<div className="badge badge-danger">Not logged in</div>)
            : (<div><div className="badge badge-success" style={{ textAlign: "right" }} >{this.props.currentSession.currentUser}</div><button style={{ color: "White" }} className="btn btn-link small" onClick={this.props.logout}>Logout</button></div>);

        return (<div style={{ textAlign: "right", padding: "10px", backgroundColor: "#222" }} >{content} </div>);
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
            logout: actions.logout,
        }, dispatch)

export default connect<IStateProps, IDispatchProps, IOwnProps>
    (mapStateToProps, mapDispatchToProps)(SessionInfoComponent)