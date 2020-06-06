import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './store';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false
        };
    };

    getAuth = () => {
        if (sessionStorage.getItem('token') !== null) {
            this.setState({isAuthenticated: true});
        } else {
            this.setState({isAuthenticated: false});
        };
    };

    componentDidMount = () => {
        this.getAuth();
    }

    render() {
        return (
            <div className="App">
            <Store.Container>
                <Router>
                    <Switch>
                    <Route path="/:location/:id" component={this.state.isAuthenticated ? Dashboard : Home} />
                    {/* Default fall-back path */}
                    <Route component={this.state.isAuthenticated ? Dashboard : Home} />
                    </Switch>
                </Router>
            </Store.Container>
            </div>
        );
    }
};

export default App;