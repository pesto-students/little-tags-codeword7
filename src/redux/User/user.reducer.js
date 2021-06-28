//import { act } from 'react-dom/test-utils';
import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  userCheck: false,
  addAddressModalFlag: false,
  userAddressFlag: false,
  loginModalFlag: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userCheck: false,
        loginModalFlag: false
      }
    case userTypes.SIGN_IN_FAIL:
      return {
        ...state,
        currentUser: null,
        loginModalFlag: false,
        userCheck: false
      }
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE
      }
    case userTypes.ADD_ADDRESS_MODAL_FLAG:
      return {
        ...state,
        addAddressModalFlag: action.payload
      }
    case userTypes.ADD_USER_ADDRESS_FLAG:
      return {
        ...state,
        userAddressFlag: action.payload
      }
    case userTypes.USER_CHECK_FLAG:
      return {
        ...state,
        userCheck: action.payload
      }
    case userTypes.IS_LOGIN_MODAL_OPEN:
      return {
        ...state,
        loginModalFlag: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;