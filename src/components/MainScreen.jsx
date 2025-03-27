import React from 'react'
import VideoCategoriesMenu from './VideoCategoriesMenu'
import VideoList from './VideoList'

const MainScreen = () => {
  return (
    <div className='col-span-10 pl-[220px] w-full'>
      <VideoCategoriesMenu/>
      <VideoList/>
    </div>
  )
}

export default MainScreen
