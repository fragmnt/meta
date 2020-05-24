import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styles from '../styles/HomePage.module.css';

function HomePage() {

    let loggedIn = () => { 
        if (process.browser) {
            var accessToken = localStorage.getItem('token');
            if (accessToken) return true;
            if (!accessToken) return false;
        }
    }

    let logOut = () => {
        localStorage.removeItem('token');
        Router.push('/')
        return;
    }

    return (
            <div className={styles.main}>
            {loggedIn() ? 
            <>
                <h4>M E T A _ IDentity Services Platform</h4>
                You are logged in. This will be your dashboard.
                <button onClick={() => logOut()}>
                    Logout
                </button>
            </> : <>
                    <span>M E T A _ I D</span>
                    <h2>Decentralized Travel Identity</h2>
                    <div>Protect your identity and payment information when traveling abroad. Powered by Marqeta and DiD.</div>
                    <Link href='/login'>
                        <button className={styles.rgBtn}>
                            Get Started
                        </button>
                    </Link>
            </>
            }
            </div>
    );
}

export default HomePage;