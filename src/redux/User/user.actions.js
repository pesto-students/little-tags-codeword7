import userTypes from './user.types';

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION
});

export const signInSuccess = user => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload:user
})

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START
})

