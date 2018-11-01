import * as React from 'react';
import { connect } from 'react-redux'
import * as Redux from 'redux';
import './App.css';

import LogonComponent from "./components/LogonComponent";
import SessionInfoComponent from "./components/SessionInfoComponent";
import logo from './logo.svg';

import IState from './IState'

export interface IOwnProps {
  version: string
}

// tslint:disable-next-line:no-empty-interface
interface IStateProps extends IState {
}

interface IDispatchProps {
  onSomeEvent: (command: any) => void
  onLogonRequest: (u: string, p: string) => void
}

type Props = IStateProps & IDispatchProps & IOwnProps

interface IInternalState {
  internalComponentStateField: string
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
      <SessionInfoComponent session={this.props.currentSession} />
      <p className="App-intro">
        {this.props.reducerCounter} To get started, edit <code>src/App.tsx</code> and save to reload.
          Release 0.0.0.2 {this.props.applicationStart} {this.props.version}
      </p>
      <LogonComponent onLogonRequest={this.props.onLogonRequest} />
      <button onClick={this.props.onSomeEvent} >Test</button>
    </div>)
  }

}

function mapStateToProps(state: IState, ownProps: IOwnProps): IStateProps {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): IDispatchProps => ({
  onSomeEvent: (cmd) => dispatch({ type: "INCREASE_COUNTER"}),
  onLogonRequest: (u: string, p:string) => dispatch( { type:"LOGON_REQUEST", username: u, password: p })
});

export default connect<IStateProps, IDispatchProps, IOwnProps>
  (mapStateToProps, mapDispatchToProps)(App)
