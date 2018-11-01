import * as React from 'react';
import { connect } from 'react-redux'
import * as Redux from 'redux';
import * as actions from "./actions";
import './App.css';

import LogonComponent from "./components/LogonComponent";
import SessionInfoComponent from "./components/SessionInfoComponent";
import logo from './logo.svg';

import { IState } from './IState'

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
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <SessionInfoComponent />
      <p className="App-intro">
        {this.props.reducerCounter} To get started, edit <code>src/App.tsx</code> and save to reload.
          Release 0.0.0.2 {this.props.applicationStart} {this.props.version}
      </p>
      <LogonComponent />
      <button onClick={this.props.increaseCounter} >Test</button>
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
