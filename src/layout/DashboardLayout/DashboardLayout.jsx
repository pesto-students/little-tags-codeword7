import React from 'react';
import Header from '../../components/Header/HeaderComponent';
import Footer from '../../components/Footer/Footer';
import './DashboardLayout.scss';
import Loader from '../../UI/Loader/Loader';

const DashboardLayout = props => {

    return (
        <div>
            <Header />
            <React.Suspense fallback={Loader}>
            <div className="dashboard-main" >
                {props.children}
            </div>
            </React.Suspense>
            <Footer />
        </div>
    )
}

export default DashboardLayout;