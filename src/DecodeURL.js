import React from "react";
import firebase from "firebase";

class DeCodeUrl extends React.Component {
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
        }
    };

    render() {
        return (
            <div className={"loader"}>Loading...</div>
        )
    }
}

export default DeCodeUrl;
