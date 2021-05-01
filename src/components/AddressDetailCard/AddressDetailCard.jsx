import React from 'react';
import './AddressDetailCard.scss';

const AddressDetailCard = ({ Address, index, onAddressChanged }) => {
    return (

        <div className="shipping-address">
            <div className="address-checkbox">
                <input
                    type="radio"
                    name="address-box"
                    id="address-box"
                    value={index}
                    onChange={onAddressChanged} />
            </div>
            <div className="address-data">
                <p className="address-username">{Address.name}</p>
                <p>{Address.address.line1}</p>
                <p>{Address.address.line2}</p>
                <p>{Address.address.city}, {Address.address.state} - {Address.address.postal_code}</p>
                <p>(+91) {Address.contactNo}</p>
            </div>
        </div>

    );
}

export default AddressDetailCard;
