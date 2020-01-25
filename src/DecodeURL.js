import React from "react";
import firebase from 'firebase/app';
import 'firebase/database';
import NotFoundPage from "./NotFound";

class DeCodeUrl extends React.Component {
    state = {notFound: false};
    componentDidMount = async () => {
        let {url} = this.props.match.params;
        let snapshot = await firebase
            .database()
            .ref(`urlStore/${url}`)
            .once("value");
        let data = snapshot.val();
        if (data) {
            let {originalUrl} = data;
            if (originalUrl) {
                window.location.assign(originalUrl);
            }
        } else {
            this.setState({notFound: true})
        }
    };

    render() {
        let {notFound} = this.state;
        return (
            notFound ? <NotFoundPage/> : <div className={"loader"}>Loading...</div>
        )
    }
}

export default DeCodeUrl;
