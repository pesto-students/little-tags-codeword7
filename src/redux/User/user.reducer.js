import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  userCheck: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userCheck: false
      }
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE
      }
    case userTypes.USER_CHECK_FLAG:
      return {
        ...state,
        userCheck: true
      }
    default:
      return state;
  }
};

export default userReducer;