import React, { useContext } from 'react';
import './Login.scss';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineGoogle } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import FirebaseContext from '../../Config/Firebase/context';
import { useDispatch } from 'react-redux';
import { googleSignInStart } from '../../redux/User/user.actions';
import withTranslator from '../../hoc/withTranslation';

// const mapState = ({ user }) => ({
//     currentUser: user.currentUser
// })

const Login = (props) => {
    const firebase = useContext(FirebaseContext);
    const dispatch = useDispatch();
    // const { currentUser } = useSelector(mapState);

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());
        props.setIsLoginModal(false);
    }

    const doFacebookSignIn = () => {
        firebase.doFacebookSignIn().then((facebookUser) => {
            console.log(facebookUser);
        })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const doPhoneNoSignIn = () => {
        props.setIsLoginModal(false);
        firebase.doPhoneNoSignIn();
    }
    return (
        <div className={props.isLoginModal ? 'forms-wrapper' : 'forms-wrapper-hide'}>
            <div className="close-btn" onClick={() => props.setIsLoginModal(false)}><GrFormClose className="close-btn-icon" /></div>
            <div className="title"><h3 className="title-1">We're glad you're here. <br />{props.strings.WelcomeToXyz}</h3></div>
            <div><button className="facebook-btn" onClick={doFacebookSignIn}><ImFacebook className="facebook-icon" /><span className="connect-fb">{props.strings.ConnectWithFacebook}</span></button></div>
            <div><button className="google-btn" onClick={handleGoogleSignIn}><AiOutlineGoogle className="facebook-icon" /><span className="connect-fb">{props.strings.ConnectWithGoogle}</span></button></div>
            <div className="or-paragraph"><div className="or">Or</div></div>
            {/* <div className="email-text">Enter Your Mobile Number</div>
            <input type="text" className="input-number" placeholder="Enter your Mobile Number" /> */}
            <div><button className="email-btn" onClick={doPhoneNoSignIn}>{props.strings.ContinueWithMobileNumber}</button></div>

        </div>
    );
}

Login.defaultProps = {
    strings: {
        WereGladYoureHere: "We're glad you're here.",
        WelcomeToXyz: "Welcome to XYZ",
        ConnectWithFacebook: "Connect with Facebook",
        ConnectWithGoogle: "Connect with Google",
        Or: "Or",
        ContinueWithMobileNumber: "Continue with Mobile Number",
    }
}


export default withTranslator('LoginComponent')(Login);
