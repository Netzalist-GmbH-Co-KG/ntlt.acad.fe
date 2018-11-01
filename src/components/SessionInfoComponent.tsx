import * as React from 'react';
import { connect } from 'react-redux'
import * as Redux from "redux";

import { ISession, IState } from '../IState'

// tslint:disable-next-line:no-empty-interface
export interface IOwnProps {
}

interface IStateProps {
    currentSession: ISession | null
}

// tslint:disable-next-line:no-empty-interface
interface IDispatchProps {
}

type Props = IStateProps & IDispatchProps & IOwnProps

interface IInternalState {
    username: string,
    password: string
}

class SessionInfoComponent extends React.Component<Readonly<Props>, IInternalState>{

    constructor(props: Readonly<Props>){
        super(props);
    }

    public render() {
        if(this.props.currentSession===null){
            return (<div className="badge badge-danger">Not logged in</div>);
        } else {
            return (<div className="badge badge-success">{this.props.currentSession.currentUser}</div>);
        }
    }

}
function mapStateToProps(state: IState, ownProps: IOwnProps): IStateProps {
    return {
      currentSession: state.currentSession,
    }
  }
  
  const mapDispatchToProps = (dispatch: Redux.Dispatch): IDispatchProps => ({ })
  
  export default connect<IStateProps, IDispatchProps, IOwnProps>
    (mapStateToProps, mapDispatchToProps)(SessionInfoComponent)