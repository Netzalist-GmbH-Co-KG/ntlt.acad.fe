import * as React from 'react';
import { connect } from 'react-redux'
import * as Redux from "redux";
import * as actions from "../actions";

import { ILogger, IState } from '../state/IState'

// tslint:disable-next-line:no-empty-interface
export interface IOwnProps {
}

interface IStateProps {
    logger: ILogger
}

// tslint:disable-next-line:no-empty-interface
interface IDispatchProps {
    showLogs: () => void,
    hideLogs: () => void,
    enableLogs: () => void,
    disableLogs: () => void,
}

type Props = IStateProps & IDispatchProps & IOwnProps

// tslint:disable-next-line:no-empty-interface
interface IInternalState {
}

class LoggingComponent extends React.Component<Readonly<Props>, IInternalState>{

    constructor(props: Readonly<Props>) {
        super(props);
    }

    public render() {

        if( this.props.logger.visible === false){
            return (<button style={{ fontSize: "9px" }} onClick={this.props.showLogs} className="btn btn-link">Show Logs</button>)
        }

        const content = this.props.logger.logs.map( (nxtLine, index) => {
            return <span key={index}>{nxtLine}<br/></span>;
        });
        return (
        <div style={{ fontSize: "9px" }}>
            <button style={{ fontSize: "9px" }} onClick={this.props.hideLogs} className="btn btn-link">Hide Logs</button>
            <button style={{ fontSize: "9px" }} onClick={this.props.logger.active ? this.props.disableLogs : this.props.enableLogs} className="btn btn-link">{ this.props.logger.active? "Disable": "Enable" } logging</button>            
            <br />{content}
        </div>);
    }
}
function mapStateToProps(state: IState, ownProps: IOwnProps): IStateProps {
    return {
        logger: state.logger,
    }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): IDispatchProps => 
Redux.bindActionCreators( 
  { 
    showLogs: actions.showLogs,
    hideLogs: actions.hideLogs,
    enableLogs: actions.enableLogs,
    disableLogs: actions.disableLogs,
  }, dispatch)

export default connect<IStateProps, IDispatchProps, IOwnProps>
    (mapStateToProps, mapDispatchToProps)(LoggingComponent)