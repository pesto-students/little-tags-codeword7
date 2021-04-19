import React from 'react'
import './DrawerToggle.scss';

function DrawerToggle({ isSidebar, setIsSidebar }) {

  return (
    <div className='DrawerToggle' onClick={() => setIsSidebar(!isSidebar)} >
      <div className={isSidebar ? "line line-1" : "line"} />
      <div className={isSidebar ? "line line-2" : "line"} />
      <div className={isSidebar ? "line line-3" : "line"} />
    </div>
  )
}

export default DrawerToggle
