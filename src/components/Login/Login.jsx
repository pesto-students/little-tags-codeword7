import React from 'react';
import './Login.scss';
import { AiOutlineGoogle } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

import { useDispatch } from 'react-redux';
import { googleSignInStart, changeLoginModal } from '../../redux/User/user.actions';
import withTranslator from '../../hoc/withTranslation';
import { useSelector } from 'react-redux';


const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    loginModalFlag: user.loginModalFlag
})

const Login = (props) => {
    const dispatch = useDispatch();
    const { loginModalFlag } = useSelector(mapState);

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());
        props.setIsLoginModal(false);
    }

    // const doFacebookSignIn = () => {
    //     dispatch(facebookSignInStart());
    //     props.setIsLoginModal(false);
    // }

    return (
        <div className={loginModalFlag ? 'forms-wrapper' : 'forms-wrapper-hide'}>
            <div className="close-btn" onClick={() => dispatch(changeLoginModal(false))}><GrFormClose className="close-btn-icon" /></div>
            <div className="title"><h3 className="title-1">We're glad you're here. <br />{props.strings.WelcomeToXyz}</h3></div>
            {/* <div><button className="facebook-btn" onClick={doFacebookSignIn}><ImFacebook className="facebook-icon" /><span className="connect-fb">{props.strings.ConnectWithFacebook}</span></button></div> */}
            {/* <div className="or-paragraph"><div className="or">Or</div></div> */}
            <div><button className="google-btn" onClick={handleGoogleSignIn}><AiOutlineGoogle className="facebook-icon" /><span className="connect-fb">{props.strings.ConnectWithGoogle}</span></button></div>

        </div>
    );
}

Login.defaultProps = {
    strings: {
        WereGladYoureHere: "We're glad you're here.",
        WelcomeToXyz: "Welcome to Little Tag",
        ConnectWithFacebook: "Connect with Facebook",
        ConnectWithGoogle: "Connect with Google",
        Or: "Or",
        ContinueWithMobileNumber: "Continue with Mobile Number",
    }
}


export default withTranslator('LoginComponent')(Login);
