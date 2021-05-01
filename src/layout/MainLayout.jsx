import React from 'react';
import Header from '../components/Header/HeaderComponent';
import Footer from '../components/Footer/Footer';
import Address from '../components/Address/Address';
import './MainLayout.scss';
import { useSelector } from 'react-redux';

const mapState = (state) => ({
    isAddressModal: state.user.addAddressModalFlag,
});

const MainLayout = props => {
    const { isAddressModal } = useSelector(mapState);
    return (
        <div>
            <Header />
            <div className="main">
                {isAddressModal}
                {isAddressModal && <Address className="address-detail-modal" />}
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;