import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.scss";
import HomePage from "./Home";
import DecodeURL from "./DecodeURL";
import * as firebase from "firebase";
import {firebaseConfig} from "./config";

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/:url" component={DecodeURL}/>
                </div>
            </Router>
        );
    }
}

export default App;
