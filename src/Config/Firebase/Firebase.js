import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase';
import * as firebaseui from "firebaseui";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            console.log(authResult);
            return false;
        }
    },
    signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
    tosUrl: "http://localhost:3000"
}



class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.database();
        this.auth = app.auth();
        this.googleAuthProvider = new app.auth.GoogleAuthProvider();
        this.facebookAuthProvider = new app.auth.FacebookAuthProvider();
    }

    doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);

    doFacebookSignIn = () => this.auth.signInWithPopup(this.facebookAuthProvider);

    user = (uid) => this.db.ref(`/users/${uid}`);

    doPhoneNoSignIn = () => {
        if (firebaseui.auth.AuthUI.getInstance()) {
            const ui = firebaseui.auth.AuthUI.getInstance()
            ui.start('#firebaseui-auth-container', uiConfig)
        } else {
            const ui = new firebaseui.auth.AuthUI(firebase.auth())
            ui.start('#firebaseui-auth-container', uiConfig)
        }
    }

    onAuthChangeListener = (next, fallback = () => { }) => {
        return this.auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then((snapshot) => {
                        const dbUser = snapshot.val();
                        const user = {
                            uid: authUser.uid,
                            email: authUser.email,
                            emailVerified: authUser.emailVerified,
                            ...dbUser
                        };
                        next(user);
                    })
            } else {
                fallback();
            }
        })
    }
}

export default Firebase;