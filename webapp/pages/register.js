import React, {createRef, useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';

import {registerUser} from '../services/api';
import styles from '../styles/Auth.module.css';

function RegistrationPage() {
    let registrationForm = createRef();

    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const [nickname, setNickname] = useState("");
    const [username, setUsername] = useState("");

    let handleEChange = (event) => {
        setEmail(event.target.value);
    }

    let handlePChange = (event) => {
        setPswd(event.target.value);
    }

    let handleNChange = (event) => {
        setNickname(event.target.value);
    }

    let handleUChange = (event) => {
        setUsername(event.target.value);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Link href="/">
                <a>
                    Return to homepage
                </a>
            </Link>
            <form onSubmit={handleSubmit} ref={registrationForm} className="">
                <h4>Register to get started using Meta.</h4>

                <label for="nickname">Name</label>
                <input type='nickname' onChange={handleNChange} value={nickname} placeholder='Enter your full name' />
                <label for="username">Username</label>
                <input type='username' onChange={handleUChange} value={username} placeholder='Pick a username' />

                <label for="email">Email</label>
                <input type='email' onChange={handleEChange} value={email} placeholder='Enter your email address' />
                <label for="email">Password</label>
                <input type='password' onChange={handlePChange} value={pswd} placeholder='Pick a strong password' />

                <button className={styles.athBtn}>Sign up</button>

                
            </form>
        </>
    );
}

export default RegistrationPage;