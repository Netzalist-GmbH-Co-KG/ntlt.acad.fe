import * as React from 'react';
import { connect } from 'react-redux'
import * as Redux from "redux";
import * as actions from "../actions";

import { IState } from '../state/IState'

// tslint:disable-next-line:no-empty-interface
export interface IOwnProps {
}

interface IStateProps {
    reducerCounter: number,
    applicationStart: string

}

interface IDispatchProps {
    increaseCounter: () => void,
}

type Props = IStateProps & IDispatchProps & IOwnProps

// tslint:disable-next-line:no-empty-interface
interface IInternalState {
}

class DemoComponent extends React.Component<Readonly<Props>, IInternalState>{

    constructor(props: Readonly<Props>) {
        super(props);
    }

    public render() {
        return (<div><hr/>
        <p className="small">
        <button onClick={this.props.increaseCounter} >Increase: </button> {this.props.reducerCounter} times clicked. Started: {this.props.applicationStart}
        </p></div>);
    }
}
function mapStateToProps(state: IState, ownProps: IOwnProps): IStateProps {
    return {
        ...state.demo
    }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): IDispatchProps =>
    Redux.bindActionCreators(
        {
            increaseCounter: actions.increaseCounter,
        }, dispatch)

export default connect<IStateProps, IDispatchProps, IOwnProps>
    (mapStateToProps, mapDispatchToProps)(DemoComponent)