import * as React from 'react';

class LogonComponent extends React.Component<{onLogonRequest: (user:string, password:string) => void}, { logonMessage: string, username: string, password: string}> {

    constructor(props: Readonly<{onLogonRequest: (user:string, password:string) => void}>){
        super(props);

        this.state={ logonMessage: "", username: "", password: "" }
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
                                <span id="logonMessage">{this.state.logonMessage}</span>
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
        this.setState( { logonMessage: `OMG -${this.state.username}- -${this.state.password}-` });
        this.props.onLogonRequest(this.state.username, this.state.password);
    }
}

export default LogonComponent;
