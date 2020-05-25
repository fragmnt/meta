import React, {setState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {getUserInformation} from '../services/api';
import Navbar from './Navbar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        };
        this.logOut = this.logOut.bind(this);
        this.fetchUserData = this.fetchUserData.bind(this);
    };

    logOut = () => {
        localStorage.removeItem('token');
        Router.push('/')
        return;
    };

    fetchUserData = async () => {
        const resp = await getUserInformation();
        if (resp) {
            if (resp.status === 200) {
                return resp.data.user; 
            } else if (resp.status === 500) {
                return "";
            } else if (resp.status === 401) {
                
            };
        }
    };

    componentDidMount = async () => {
        window.document.title = "My Account | Meta Travel"
        const userData = await this.fetchUserData();
        this.setState({
            user: {
                email: userData.email,
                id: userData.id,
                nickname: userData.nickname,
                username: userData.username,
                pfp_url: userData.profile_photo_url
            }
        });
    };


    render() {
        return (
            <div>
                {/* pass this.state.user props to navbar */}
                <Navbar logout={this.logOut()} user={this.state.user} />
                <h4>M E T A _ IDentity Services Platform</h4>
                <div>
                    <h3>{this.state.user.nickname}!</h3>
                    <span>{this.state.user.email}</span>
                </div>
                You are logged in. This will be your dashboard.
            </div> 
        )
    }
}

export default Dashboard;