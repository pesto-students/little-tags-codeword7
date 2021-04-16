import { SET_AUTH_USER } from '../constants/actionType';

export const setAuthUser = (authUser) => ({
    type: SET_AUTH_USER,
    authUser
});