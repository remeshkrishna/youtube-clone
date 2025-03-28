import React from 'react'
import SideMenu from './SideMenu'
import MainScreen from './MainScreen'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-cols-10 gap-10 overflow-hidden pt-[60px] h-screen'>
      <SideMenu/>
      <Outlet/>
      {/* <MainScreen/> */}
    </div>
  )
}

export default Body
