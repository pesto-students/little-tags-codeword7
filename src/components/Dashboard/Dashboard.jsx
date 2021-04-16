import React from 'react';
import Header from '../Header/HeaderComponent';
import Homebanner from '../Homebanner/HomeBanner';
import DashboardCategory from '../DashboardCategory/DashboardCategory';
import Footer from '../Footer/Footer';
import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div>
            <Homebanner />
            <div className="arrival-header">
                <h3 className="arrival-heading">New Arrival</h3>
            </div>
            <div id="firebaseui-auth-container" className="mobile-verification"></div>
            <DashboardCategory />
        </div>
    );
}

export default Dashboard;
