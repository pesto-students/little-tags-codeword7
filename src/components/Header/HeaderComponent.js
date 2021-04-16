import React, { useState } from 'react'
import './HeaderComponent.scss'
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import Sidebar from '../Sidebar/Sidebar';
import Login from '../Login/Login';
// import FirebaseContext from '../../Config/Firebase/context';


function HeaderComponent() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  // const firebase = useContext(FirebaseContext);

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
        <div className='login' onClick={() => setIsLoginModal(true)}>
          <BiLogIn className="login-icon" /><span className="login-title">Login / Sign Up</span>
        </div>
        <div className='cartContainer'>
          <FaShoppingCart className="login-icon" /><span className="login-title">Your Cart</span>
        </div>
        <div className="login-container">
          <Login isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent;
