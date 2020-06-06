import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default class HomeNav extends Component {
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
                        <li>Features</li>
                        <li>Quickstart</li>
                        <li>
                            <a href="/">Login</a>
                        </li>
                        <li>
                            <a href="/">Signup</a>
                        </li>
                    </ul>
                </div>
            </>
        ) 
    }
}