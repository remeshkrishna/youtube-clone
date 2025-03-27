import React from 'react'
import SideMenu from './SideMenu'
import MainScreen from './MainScreen'

const Body = () => {
  return (
    <div className='grid grid-cols-10 gap-10 overflow-x-hidden pt-[60px]'>
      <SideMenu/>
      <MainScreen/>
    </div>
  )
}

export default Body
