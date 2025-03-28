import React from 'react'
import VideoCategoriesMenu from './VideoCategoriesMenu'
import VideoList from './VideoList'

const MainScreen = () => {
  return (
    <div className='col-span-9  w-full h-screen overflow-y-scroll'>
      <VideoCategoriesMenu/>
      <VideoList/>
    </div>
  )
}

export default MainScreen
