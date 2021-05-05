// import React, { useEffect, useContext } from 'react';
// import { connect } from 'react-redux';
// import FirebaseContext from '../Config/Firebase/context';
// import { setAuthUser } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkUserSession, userCheckedInSucess } from '../redux/User/user.actions';
import Loader from '../UI/Loader/Loader';

const mapState = (state) => ({
    userCheck: state.user.userCheck,
    userAddressFlag: state.user.userAddressFlag
});

const withAuthenticaton = (Component) => {

    const NewComponent = (props) => {
        const dispatch = useDispatch();
        const { userCheck, userAddressFlag } = useSelector(mapState);
        useEffect(() => {
            dispatch(userCheckedInSucess(true));
            dispatch(checkUserSession());
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        // const firebase = useContext(FirebaseContext);
        // const saveToLocalStorage = (authUser) => {
        //     localStorage.setItem('authUser', JSON.stringify(authUser))
        // }
        // const next = (authUser) => {
        //     saveToLocalStorage(authUser);
        //     props.setAuthUser(authUser);
        // }
        // const fallback = () => {
        //     localStorage.removeItem('authUser');
        //     props.setAuthUser(null);
        // }
        // useEffect(() => {
        //     const user = JSON.parse(localStorage.getItem('authUser'));
        //     props.setAuthUser(user);
        //     firebase.onAuthChangeListener(next, fallback);
        // }, []);

        return (
            <div>
                {(userCheck || userAddressFlag) &&
                    <Loader />
                }
                <Component userCheck={userCheck} userAddressFlag={userAddressFlag} {...props} />
            </div>

        );
    }
    return NewComponent;
}

export default withAuthenticaton;