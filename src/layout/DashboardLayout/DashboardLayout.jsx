import React from 'react';
import Header from '../../components/Header/HeaderComponent';
import Footer from '../../components/Footer/Footer';
import './DashboardLayout.scss';

const DashboardLayout = props => {
    return (
        <div>
            <Header />
            <div className="dashboard-main">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default DashboardLayout;