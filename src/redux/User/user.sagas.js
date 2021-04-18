import { takeLatest, call, all, put } from 'redux-saga/effects';
import { auth, handelUserProfile } from '../../config/Firebase/util';
import userTypes from './user.types';
import { signInSuccess } from './user.actions';
import { getCurrentUser, GoogleProvider } from '../../config/Firebase/util';

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
   try {
      const userRef = yield call(handelUserProfile, { userAuth:  user, additionalData});
      const snapshot = yield userRef.get();
      console.log(snapshot.data);
      yield put(
        signInSuccess({
          id: snapshot.id,
          ...snapshot.data()
        })
      )
   } catch(error) {
     console.log(error);
   }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if(!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth); 
  } catch (err) {
    // console.log(err);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* googleSignIn() {
  console.log("In Google Sign In")
  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    yield getSnapshotFromUserAuth(user);

  } catch (err) {
    console.log(err);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}


export default function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart)
  ])
}