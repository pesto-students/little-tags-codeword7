import { useDispatch, useSelector } from 'react-redux';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
});

const withAuthorization = (Component) => {
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const NewComponent = (props) => {

    };

}

export default withAuthorization;