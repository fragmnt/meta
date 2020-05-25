import React from 'react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import Dashboard from '../components/Dashboard';


function HomePage() {

    let loggedIn = () => { 
        if (process.browser) {
            var accessToken = localStorage.getItem('token');
            if (accessToken) return true;
            if (!accessToken) return false;
        }
    }

    return (
            <div className={styles.main}>
            {loggedIn() ? 
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
    );
}

export default HomePage;