import React from 'react';
import Link from 'next/link';

function HomePage() {

    let loggedIn = () => {
        var accessToken = localStorage.getItem('token');
        if (accessToken) return true;
        if (!accessToken) return false;
    }

    return (
            <>
            {loggedIn() ? <>
                You are logged in. This will be your dashboard.
            </> : <>
            <span>M E T A _ I D</span>
            <h2>Decentralized Travel Identity</h2>
            <div>Protect your identity and payment information when traveling abroad. Powered by Marqeta and DiD.</div>
            <Link href='/register'>
                <button>
                    Get Started
                </button>
            </Link>
            </>}
            </>
    );
}

export default HomePage;