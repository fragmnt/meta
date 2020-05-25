import React from 'react';

const Navbar = (props) => {

    return (
        <>
        <button onClick={() => props.logOut()}>
                    Logout
                </button>
        </>
    )
};

export default Navbar;