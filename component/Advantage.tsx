import React from 'react';
import './Advantage.css';

const LimeTrayAdvantage: React.FC = () => {
    return (
        <div className="advantage-container">
            <h2 className="advantage-title">The LimeTray Advantage</h2>
            <div className="advantage-cards">
                <div className="advantage-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png"
                        alt="Customer Support"
                        className="advantage-icon"
                    />
                    <h3>Customer Support</h3>
                    <p>
                        Our support team is available on call & live chat 7 days a week,
                        throughout the year.
                    </p>
                </div>
                <div className="advantage-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png
"
                        alt="Dedicated Account Manager"
                        className="advantage-icon"
                    />
                    <h3>Dedicated Account Manager</h3>
                    <p>
                        You will get a dedicated account manager to help you with everything
                        related to our products & services.
                    </p>
                </div>
                <div className="advantage-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2632/2632094.png"
                        alt="Platform"
                        className="advantage-icon"
                    />
                    <h3>Platform</h3>
                    <p>
                        All LimeTray products talk to each other which means you get
                        visibility of your entire business on a single platform.{' '}
                        <a href="#">See all products</a>
                    </p>
                </div>
                <div className="advantage-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/556/556722.png"
                        alt="Integrations"
                        className="advantage-icon"
                    />
                    <h3>Integrations</h3>
                    <p>
                        Manage all essential integrations - third-parties, POS, online
                        payments & more - on LimeTray’s platform.{' '}
                        <a href="#">See Integrations</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LimeTrayAdvantage;
