import React, {createRef, useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';

import {loginUser} from '../services/api';
import styles from '../styles/Auth.module.css';

function LoginPage() {
    let registrationForm = createRef();

    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");

    let handleEChange = (event) => {
        setEmail(event.target.value);
    }

    let handlePChange = (event) => {
        setPswd(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        var resp = await loginUser(email, pswd);
        
        if (resp.status === 200 && resp.data.exists === true) {

            localStorage.setItem('token', resp.data.accessToken);
            // alert(`Logging in ${resp.data.user.email}!`);
            Router.push('/');
        }
    };

    return (
        <>
            <Link href='/'>
                <a>Return to the homepage.</a>
            </Link>
            
            <form ref={registrationForm} onSubmit={handleSubmit}>
                
                <h4>Welcome back! Please sign in.</h4>

                <label for="email">Email</label>
                <input type='email' onChange={handleEChange} value={email} placeholder='Enter your email address' />
                <label for="email">Password</label>
                <input type='password' onChange={handlePChange} value={pswd} placeholder='Enter your password' />
                
                <button className={styles.athBtn}>Sign In</button>
            
            </form>
        </>
    )
}

export default LoginPage;