import * as React from 'react';
import './App.css';

import LogonComponent from "./components/LogonComponent";
import logo from './logo.svg';

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          Release 0.0.0.2
        </p>
        <LogonComponent onLogonRequest={this.onLogonRequest} />
      </div>
    );
  }

  private onLogonRequest = (u: string, p:string) => { return; }
}

export default App;
