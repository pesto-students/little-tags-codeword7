import { takeLatest, call, all, put } from 'redux-saga/effects';
import { auth, handelUserProfile, getCurrentUser, GoogleProvider, FacebookProvider } from '../../Config/Firebase/util';
import userTypes from './user.types';
import { signInSuccess, signOutUserSuccess, userCheckedInSucess, addUserAddressFlag, signInUserFail } from './user.actions';
import { addUserAddress } from './user.helper';


export function* getSnapshotFromUserAuth(user, additionalData = {}) {
  try {
    const userRef = yield call(handelUserProfile, { userAuth: user, additionalData });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data()
      })
    )
  } catch (error) {
    console.log(error);
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    console.log(userAuth)
    if (!userAuth) {
      yield put(userCheckedInSucess(false));
    } else {
      yield getSnapshotFromUserAuth(userAuth);
    }

  } catch (err) {
    yield put(signInUserFail());
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* googleSignIn() {

  yield put(userCheckedInSucess(true));

  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInUserFail());
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* faceBookSignIn() {
  yield put(userCheckedInSucess(true));
  try {
    const data = yield auth.signInWithPopup(FacebookProvider);
    console.log(data);
  } catch (error) {
    yield put(userCheckedInSucess(false));
    console.log(error.message);
  }
}

export function* onFaceBookSignInStart() {
  yield takeLatest(userTypes.FACEBOOK_SIGN_IN_START, faceBookSignIn);
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(
      signOutUserSuccess()
    )

  } catch (err) {
    // console.log(err);
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* addUserAddressInDatabase({ payload }) {
  const userAuth = yield getCurrentUser();
  try {
    if (userAuth) {
      const updateDoc = yield addUserAddress(payload, userAuth);
      console.log(updateDoc);
      yield put(
        signInSuccess(
          updateDoc
        )
      )
      yield put(
        addUserAddressFlag(false)
      )
    }
  } catch (err) {
    console.log(err.message);
  }

}

export function* onAddUserAddress() {
  yield takeLatest(userTypes.ADD_USER_ADDRESS_START, addUserAddressInDatabase)
}

export default function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onSignOutUserStart),
    call(onAddUserAddress),
    call(onFaceBookSignInStart)
  ])
}