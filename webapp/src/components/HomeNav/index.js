import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './index.css';

class HomeNav extends Component {
    constructor() {
		super();
		this.state = {};
    }
    
    render() {
        return (
            <>
                <div className="homenav">
                    <p>Meta</p>
                    <ul>
                        <li>
                            <NavLink to="/about">Features</NavLink>
                        </li>
                        <li>
                            <NavLink to="/guide">Quickstart</NavLink>
                        </li>
                        <li>
                            <NavLink className="special" to="/signin">Login</NavLink>
                        </li>
                        <li>
                            <NavLink className="special" to="/signup">Signup</NavLink>
                        </li>
                    </ul>
                </div>
            </>
        ) 
    }
}

export default withRouter(HomeNav);