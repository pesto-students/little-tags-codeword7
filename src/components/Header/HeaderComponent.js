import React from 'react'
import './HeaderComponent.scss'
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import { FaShoppingCart } from 'react-icons/fa';

function HeaderComponent() {
  return (
    <header>
      <div className='ToolBar'>
        <DrawerToggle />
        <div className='logo'>
          Little Tags
        </div>
        <div className='SearchBar'>
          <input type="text" placeholder="Search Products" className='SearchInput' />
        </div>
        <div className='login'>
          <span>Login / Sign Up</span>
        </div>
        <div className='cartContainer'>
          <FaShoppingCart />
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
