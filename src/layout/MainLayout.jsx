import React from 'react';
import Header from '../components/Header/HeaderComponent';
import Footer from '../components/Footer/Footer';
import './MainLayout.scss';

const MainLayout = props => {
    return (
        <div>
            <Header />
            <div className="main">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;