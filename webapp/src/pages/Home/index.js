import React, {Component} from 'react';
import './index.css';

import HomeNav from '../../components/HomeNav';

class Home extends Component {
    constructor() {
        super();
        this.state = {};
    };

    componentDidMount = () => {
        window.document.title = "Meta Travel | Home"
    }

    segueForward = () => {
        this.props.history.push('/')
    }

    render() {
        return(
            <>
                <div className="home">
                    <div className="banner">
						<span>Built on Marqeta. 
                            <a href="https://www.marqeta.com" target="_blank" rel="noopener noreferrer">
                                Learn more.
                            </a>
                        </span>
					</div>
                    <HomeNav/>
                    <div id="main" className="wrapper">
                        <h1>
                            <span>
                                Traveling?
                            </span>
                            <br/>
                            Keep your finances safe.
                        </h1>
                        <p>
                            When vacationing abroad, you are <span>50% more likely to lose your wallet</span>. 
                            With Meta, you now have a digital wallet service with access to real card printing to 
                            create disposable burner identities when traveling abroad. Protect
                            what matters to you the most: <span>you</span>.
                        </p>
                        <a href="#about" className="btn">
                            Learn more
                        </a>
                    </div>
                    <div id="about">
                        About Meta
                    </div>
                    <div id="guide">
                        How To: Travel Protection
                    </div>
                </div>
            </>
        )
    };
}

export default Home;