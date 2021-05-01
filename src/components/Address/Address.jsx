import React, { useState } from "react";
import FormInput from '../../UI/FormInput/FormInput';
import './Address.scss';
import withTranslator from '../../hoc/withTranslation';
import { addUserAddress, addUserAddressFlag, addAddressModal } from '../../redux/User/user.actions';
import { useDispatch } from "react-redux";

const initialAddressState = {
    line1: '',
    line2: '',
    city: '',
    state: '',
    postal_code: '',
}

const Address = (props) => {

    const [recipientFirstName, setRecipientFirstName] = useState('');
    const [recipientLastName, setRecipientLastName] = useState('');
    const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
    const [contactNo, setContactNo] = useState('');
    const [emailId, setEmailId] = useState('');
    const dispatch = useDispatch();

    const handleShipping = async (evt) => {

        const { name, value } = evt.target;
        setBillingAddress({
            ...billingAddress,
            [name]: value
        })
    }

    const submitAddress = (event) => {
        event.preventDefault();
        const billingDetails = {
            name: recipientFirstName + " " + recipientLastName,
            address: billingAddress,
            contactNo,
            emailId
        }
        console.log(billingDetails);
        dispatch(addUserAddressFlag(true));
        dispatch(addUserAddress(billingDetails));
        dispatch(dispatch(addAddressModal(false)));
    }

    return (
        <div>
            <div className="shipping-form">
                <h3 className="address-details-heading">Address Details</h3>
                <form onSubmit={submitAddress}>
                    <div className="form-name-wrapper">
                        <div className="form-group">
                            <label className="form-label">{props.strings.FirstName}</label>
                            <FormInput
                                placeholder="First Name"
                                name="recipientFirstName"
                                handleOnChange={evt => setRecipientFirstName(evt.target.value)}
                                value={recipientFirstName}
                                type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">{props.strings.LastName}</label>
                            <FormInput
                                placeholder="Last Name"
                                name="recipientLastName"
                                handleOnChange={evt => setRecipientLastName(evt.target.value)}
                                value={recipientLastName}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">{props.strings.StreetAddress}</label>
                        <FormInput
                            placeholder="Street Address1"
                            name="line1"
                            handleOnChange={evt => handleShipping(evt)}
                            value={billingAddress.line1}
                            type="text"
                        />
                        <br />
                        <FormInput
                            placeholder="Street Address2"
                            name="line2"
                            handleOnChange={evt => handleShipping(evt)}
                            value={billingAddress.line2}
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">{props.strings.City}</label>
                        <FormInput
                            placeholder="City"
                            name="city"
                            handleOnChange={evt => handleShipping(evt)}
                            value={billingAddress.city}
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">{props.strings.State}</label>
                        <FormInput
                            placeholder="State"
                            name="state"
                            handleOnChange={evt => handleShipping(evt)}
                            value={billingAddress.state}
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">{props.strings.Postal}</label>
                        <FormInput
                            placeholder="State"
                            name="postal_code"
                            handleOnChange={evt => handleShipping(evt)}
                            value={billingAddress.postal_code}
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">{props.strings.Phone}</label>
                        <FormInput
                            placeholder="Contact Number"
                            name="contactNo"
                            handleOnChange={evt => setContactNo(evt.target.value)}
                            value={contactNo}
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">{props.strings.EmailAddress}s</label>
                        <FormInput
                            placeholder="Email Address"
                            name="emailId"
                            handleOnChange={evt => setEmailId(evt.target.value)}
                            value={emailId}
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <button className="address-details-submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Address.defaultProps = {
    strings: {
        FirstName: "First Name",
        LastName: "Last Name",
        StreetAddress: "Street Address",
        City: "City",
        State: "State",
        Postal: "Postal",
        Phone: "Phone Number",
        EmailAddress: "EmailAddress",
    }
}

export default withTranslator('AddressComponent')(Address);
