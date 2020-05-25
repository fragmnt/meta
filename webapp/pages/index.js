import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import Dashboard from '../components/Dashboard';


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
        this.toggleAuth = this.toggleAuth.bind(this);
    };

    toggleAuth = () => {
        var accessToken = window.localStorage.getItem('token');
            if (accessToken) this.setState({loggedIn : true });
            if (!accessToken) this.setState({ loggedIn : false })
    }

    componentDidMount() {
        this.toggleAuth();
    }

    render() {
    return (
                <div className={styles.main}>
                {this.state.loggedIn === true ? 
                    <Dashboard/> 
                : <>
                        <span>M E T A _ I D</span>
                        <h2>Decentralized Travel Identity</h2>
                        <div>Protect your identity and payment information when traveling abroad. Powered by Marqeta and DiD.</div>
                        <Link href='/register'>
                            <button className={styles.rgBtn}>
                                Get Started
                            </button>
                        </Link>
                        <Link href='/login'>
                            <a>
                                Already a user? Login.
                            </a>
                        </Link>
                </>
                }
                </div>
    )};
}

export default HomePage;