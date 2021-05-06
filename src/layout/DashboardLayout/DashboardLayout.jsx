import React from 'react';
import Header from '../../components/Header/HeaderComponent';
import Footer from '../../components/Footer/Footer';
import './DashboardLayout.scss';
import Loader from '../../UI/Loader/Loader';
import Address from '../../components/Address/Address';
import { useSelector } from 'react-redux';

const mapState = (state) => ({
    isAddressModal: state.user.addAddressModalFlag,
});

const DashboardLayout = props => {
    const { isAddressModal } = useSelector(mapState);
    return (
        <div>
            <Header />
            <React.Suspense fallback={Loader}>
                <div className="dashboard-main" >
                    {isAddressModal && <Address className="address-detail-modal" />}
                    {props.children}
                </div>
            </React.Suspense>
            <Footer />
        </div>
    )
}

export default DashboardLayout;