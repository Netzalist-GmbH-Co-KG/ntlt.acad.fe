import * as React from 'react';
import { connect } from 'react-redux'
import * as Redux from 'redux';
import * as actions from "./actions";
import './App.css';

import DemoComponent from "./components/DemoComponent";
import LogonComponent from "./components/LogonComponent";
import SessionInfoComponent from "./components/SessionInfoComponent";
import logo from './logo.svg';

import { IState } from './state/IState'

export interface IOwnProps {
  version: string
}

// tslint:disable-next-line:no-empty-interface
interface IStateProps extends IState {
}

interface IDispatchProps {
  increaseCounter: () => void
}

type Props = IStateProps & IDispatchProps & IOwnProps

// tslint:disable-next-line:no-empty-interface
interface IInternalState {
}

class App extends React.Component<Props, IInternalState> {

  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Academy Builder</h1>
      </header>
      <SessionInfoComponent/>
      { this.props.currentSession ? <DemoComponent /> : <LogonComponent /> }
    </div>)
  }
}

function mapStateToProps(state: IState, ownProps: IOwnProps): IStateProps {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): IDispatchProps => 
  Redux.bindActionCreators( 
    { 
      increaseCounter: actions.increaseCounter
    }, dispatch)


export default connect<IStateProps, IDispatchProps, IOwnProps>
  (mapStateToProps, mapDispatchToProps)(App)
