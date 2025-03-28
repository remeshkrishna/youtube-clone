import React from 'react'
import SubscriptionList from './SubscriptionList'

const SideMenu = () => {
  return (
    <div className={'flex flex-col ml-2 col-span-1 hover:overflow-y-scroll h-screen scroll-smooth'}>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/home.png'/>
            <p>Home</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/shorts.png'/>
            <p>Shorts</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/subscription.png'/>
            <p>Subscriptions</p>
        </div>
        <div className='p-2 border-b border-gray-300'></div>
        <div className='p-2 hover:bg-gray-200 rounded-lg font-semibold'>
            <p>You</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/history.png'/>
            <p>History</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/playlist.png'/>
            <p>Playlists</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/watch_later.png'/>
            <p>Watch Later</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/like.png'/>
            <p>Liked Videos</p>
        </div>
        <div className='p-2 border-b border-gray-300'></div>
        <div className='p-2 hover:bg-gray-200 rounded-lg font-semibold'>
            <p>Explore</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/history.png'/>
            <p>Trending</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/playlist.png'/>
            <p>Shopping</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/watch_later.png'/>
            <p>Music</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/like.png'/>
            <p>Films</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/like.png'/>
            <p>Live</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/like.png'/>
            <p>Gaming</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/like.png'/>
            <p>News</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/like.png'/>
            <p>Sport</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/like.png'/>
            <p>Courses</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/like.png'/>
            <p>Fashion & beauty</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/like.png'/>
            <p>Podcasts</p>
        </div>
        <div className='p-2 border-b border-gray-300'></div>
        <div className='p-2 hover:bg-gray-200 rounded-lg font-semibold'>
            <p>More from Youtube</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/history.png'/>
            <p>YouTube Premium</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/history.png'/>
            <p>YouTube Music</p>
        </div>
        <div className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
            <img className='w-6 h-6' src='/src/assets/history.png'/>
            <p>YouTube Kids</p>
        </div>
        <div className='p-2 border-b border-gray-300'></div>
        <div className='p-2 hover:bg-gray-200 rounded-lg font-semibold'>
            <p>Subscriptions</p>
        </div>
        <SubscriptionList/>

        <div className='p-2 hover:bg-gray-200 rounded-lg'></div>
        <div className='p-2 hover:bg-gray-200 rounded-lg'></div>
      
    </div>
  )
}

export default SideMenu
