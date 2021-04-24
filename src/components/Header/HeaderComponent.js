import React, { useState } from 'react'
import './HeaderComponent.scss'
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../redux/Cart/cart.selector';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
// import FirebaseContext from '../../Config/Firebase/context';
import { Link } from 'react-router-dom';
// import { signOutUser } from '../../redux/User/user.sagas';
import { signOutUserStart } from '../../redux/User/user.actions';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumberOfCartItem: selectCartItemsCount(state)
});

function HeaderComponent() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  // const firebase = useContext(FirebaseContext);
  const { currentUser, totalNumberOfCartItem } = useSelector(mapState);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  }
  return (
    <header>
      <div className='ToolBar'>
        <DrawerToggle isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        <div className="main-sidebar">
          <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        </div>

        <div className='logo'>
          <Link className="link" to="/">
            Little Tags
                </Link>
        </div>
        <div className='SearchBar'>
          <input type="text" placeholder="Search Products" className='SearchInput' />
          <AiOutlineSearch className="search-icon" />
        </div>

        {!currentUser &&
          [<div className='login' onClick={() => setIsLoginModal(!isLoginModal)}>
            <BiLogIn className="login-user-icon" /><span className="login-header-title">Login</span>
          </div>
          ]}

        {currentUser &&
          [<div className='cartContainer'>
            <div className='login-item'>
              <FaUser className="login-icon" /><span className="login-title">{currentUser.displayName}</span>
            </div>
            <div className='login-item'>
              <FaShoppingCart className="login-icon header-cart-icon" /><span ><Link className="header-cart-icon" to="/cart">
                Your Cart ({totalNumberOfCartItem})
                </Link></span>
            </div>
            <div className='login-item' onClick={() => signOut()}>
              <BiLogOut className="login-icon" /><span className="login-title">Logout</span>
            </div>
          </div>
          ]}

        <div className="login-container">
          <Login isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent;
