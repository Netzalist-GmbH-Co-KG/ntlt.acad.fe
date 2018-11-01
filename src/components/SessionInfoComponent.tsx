import * as React from 'react';

interface ISessionInfoComponentProps {
    session: {
      currentUser: string,
      sessionStart: Date  
    } | null
}

class SessionInfoComponent extends React.Component<ISessionInfoComponentProps, { logonMessage: string, username: string, password: string}> {

    constructor(props: Readonly<ISessionInfoComponentProps>){
        super(props);
    }

    public render() {
        if(this.props.session===null){
            return (<div className="badge badge-danger">Not logged in</div>);
        } else {
            return (<div className="badge badge-success">{this.props.session.currentUser}</div>);
        }
    }

}

export default SessionInfoComponent;
