import userTypes from './user.types';

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION
});

export const signInSuccess = user => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user
})

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START
});

export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START,
});

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS
});

export const userCheckedInSucess = (flagValue) => ({
  type: userTypes.USER_CHECK_FLAG,
  payload: flagValue
});

export const addAddressModal = (addressModalFlag) => ({
  type: userTypes.ADD_ADDRESS_MODAL_FLAG,
  payload: addressModalFlag
});

export const addUserAddress = (addressData) => ({
  type: userTypes.ADD_USER_ADDRESS_START,
  payload: addressData
})

export const addUserAddressFlag = (userAddressFlagValue) => ({
  type: userTypes.ADD_USER_ADDRESS_FLAG,
  payload: userAddressFlagValue
})

export const facebookSignInStart = () => ({
  type: userTypes.FACEBOOK_SIGN_IN_START
})

export const changeLoginModal = (loginModalFlag) => ({
  type: userTypes.IS_LOGIN_MODAL_OPEN,
  payload: loginModalFlag
});

export const signInUserFail = () => ({
  type: userTypes.SIGN_IN_FAIL
})

