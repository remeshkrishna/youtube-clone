import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className='grid grid-cols-4 w-full fixed bg-white'>
      <div className='flex p-3 m-2 ml-4 gap-6'>
        <button className='hover:cursor-pointer'><img  className='w-4 h-5' alt="youtube menu" src='/src/assets/hamburger.png'/></button>
        <img className='w-24' alt="youtube logo" src='https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg'/>
      </div>
      <SearchBar/>
      <div className='flex place-content-end place-items-center gap-2'>
        <button className='flex bg-gray-200 rounded-4xl p-1 gap-1 pr-4 place-content-center place-items-center'>
            <img className='w-6 h-6' src='/src/assets/plus.png'/>
            <span className='font-bold'>Create</span>
        </button>
        <img className='w-9 h-9' src='/src/assets/notification.png'/>
        <img className='w-9 h-9 mr-2'  src='/src/assets/user_icon.png'/>
      </div>
    </div>
  )
}

export default Header
