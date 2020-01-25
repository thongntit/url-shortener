import React from 'react';
import {Link} from 'react-router-dom';
import PageNotFound from './misc/404-page-error.png';

class NotFoundPage extends React.Component {
    render() {
        return <div>
            <img alt={"404 error"} src={PageNotFound}/>
            <p style={{textAlign: "center"}}>
                <Link to="/">Go to Home</Link>
            </p>
        </div>;
    }
}

export default NotFoundPage;