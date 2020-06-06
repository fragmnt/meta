import React, {createRef, useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';

import {registerUser} from '../services/api';

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

    let handleSubmit = async (event) => {
        event.preventDefault();

        var resp = await registerUser(email, nickname, username, pswd);
        
        if (resp && resp.status === 201) {
           localStorage.setItem('token', resp.data.accessToken);
           Router.push('/');
        } else if (resp && resp.status === 409) {
            alert('Try again with a different email. This account already exists!');
            setEmail("");
            setPswd("");
            setUsername("");
            setNickname("");
        }
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

                <label htmlFor="nickname">Name</label>
                <input type='nickname' onChange={handleNChange} value={nickname} placeholder='Enter your full name' />
                <label htmlFor="username">Username</label>
                <input type='username' onChange={handleUChange} value={username} placeholder='Pick a username' />

                <label htmlFor="email">Email</label>
                <input type='email' onChange={handleEChange} value={email} placeholder='Enter your email address' />
                <label htmlFor="email">Password</label>
                <input type='password' onChange={handlePChange} value={pswd} placeholder='Pick a strong password' />

                <button>Sign up</button>

                
            </form>
        </>
    );
}

export default RegistrationPage;