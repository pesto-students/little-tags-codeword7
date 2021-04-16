import React, { useContext } from 'react';
import './Login.scss';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineGoogle } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import FirebaseContext from '../../Config/Firebase/context';

const Login = ({ isLoginModal, setIsLoginModal }) => {
    const firebase = useContext(FirebaseContext);

    const handleGoogleSignIn = () => {
        firebase
            .doGoogleSignIn()
            .then((authUser) => {
                setIsLoginModal(false);
                return firebase.user(authUser.user.uid).set({
                    email: authUser.user.email,
                    username: authUser.user.displayName,
                    roles: {}
                });
            })
            .catch((error) => {
                console.log(error.message);
            })
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
        setIsLoginModal(false);
        firebase.doPhoneNoSignIn();
    }
    return (
        <div className={isLoginModal ? 'forms-wrapper' : 'forms-wrapper-hide'}>
            <div className="close-btn" onClick={() => setIsLoginModal(false)}><GrFormClose className="close-btn-icon" /></div>
            <div className="title"><h3 className="title-1">We're glad you're here. <br />Welcome to XYZ</h3></div>
            <div><button className="facebook-btn" onClick={doFacebookSignIn}><ImFacebook className="facebook-icon" /><span className="connect-fb">Connect with Facebook</span></button></div>
            <div><button className="google-btn" onClick={handleGoogleSignIn}><AiOutlineGoogle className="facebook-icon" /><span className="connect-fb">Connect with Google</span></button></div>
            <div className="or-paragraph"><div className="or">Or</div></div>
            {/* <div className="email-text">Enter Your Mobile Number</div>
            <input type="text" className="input-number" placeholder="Enter your Mobile Number" /> */}
            <div><button className="email-btn" onClick={doPhoneNoSignIn}>Continue with Mobile Number</button></div>

        </div>
    );
}

export default Login;
