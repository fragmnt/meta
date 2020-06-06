import React, { Component } from 'react';
import {withRouter} from 'next/router';
import HomePage from './index';
import '../styles/app.css';

class App extends Component {

    render() {
        const pageProps = this.props;
        return (
            <>
                <HomePage {...pageProps}/>
            </>
        );
    }
}

export default withRouter(App);