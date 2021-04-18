import React, { useState } from 'react'
import './HeaderComponent.scss'
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../Login/Login';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../redux/Cart/cart.selector';
// import FirebaseContext from '../../Config/Firebase/context';
import { Link } from 'react-router-dom';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumberOfCartItem: selectCartItemsCount(state)
});

function HeaderComponent() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  // const firebase = useContext(FirebaseContext);
  const { currentUser, totalNumberOfCartItem } = useSelector(mapState);
  return (
    <header>
      <div className='ToolBar'>
        <DrawerToggle isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        <div className="main-sidebar">
          <Sidebar isSidebar={isSidebar} />
        </div>

        <div className='logo'>
          Little Tags
        </div>
        <div className='SearchBar'>
          <input type="text" placeholder="Search Products" className='SearchInput' />
          <AiOutlineSearch className="search-icon" />
        </div>

        {currentUser && 
          [<div className='login'>
          <BiLogIn className="login-icon" /><span className="login-title">{currentUser.displayName}</span>
        </div>
          ]}

          {!currentUser && 
          [<div className='login' onClick={() => setIsLoginModal(!isLoginModal)}>
          <BiLogIn className="login-icon" /><span className="login-title">Login / Sign Up</span>
        </div>
          ]}

          {currentUser && 
          [<div className='cartContainer'>
            <FaShoppingCart className="login-icon" /><span className="login-title"><Link to="/cart">
              Your Cart({totalNumberOfCartItem})
          </Link></span>
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
