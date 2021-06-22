import React from 'react';
import {BrowserRouter as Route,Link} from 'react-router-dom';


class Main extends React.Component {
    render() {
        return (
            <div>
                <Route></Route>
                <div class="main">
                    <Link to="/home"><img alt="dd" src="assets/img/main-logo.jpg"/></Link>
                </div>
            </div>
        )
    }
}
export default Main;