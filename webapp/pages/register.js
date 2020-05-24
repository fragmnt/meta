import React, {createRef, useState} from 'react';
import Link from 'next/link';
import {loginUser} from '../services/api';

function RegisterPage() {
    let registrationForm = createRef();
    let emailRef = createRef();
    let pswdRef = createRef();

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
        alert(resp);
    };

    return (
        <>
            <Link href='/'>return to homepage</Link>
            <h2>Register an Account</h2>
            <form ref={registrationForm} onSubmit={handleSubmit}>
                <input type='email' onChange={handleEChange} value={email} placeholder='create a email address' />
                <input type='password' onChange={handlePChange} value={pswd} placeholder='create a password' />
                <button>register your account</button>
            </form>
        </>
    )
}

export default RegisterPage;