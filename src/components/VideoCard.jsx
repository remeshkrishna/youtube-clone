import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const VideoCard = ({video,channelId}) => {
  const [channelLogo,setChannel] = useState(null)
  const channelInfo = useSelector((store)=>store.video.channelInfo)
  const navigate = useNavigate()

  const handleClick=()=>{
    navigate('/watch?v='+video.id)
  }

  useEffect(()=>{
    //fetchChannel()
    console.log("rendered")
    if(video){

     setChannel(channelInfo?.[channelId]?.snippet.thumbnails.default.url)
    }
  },[channelInfo])
  return (
    <div className='w-[320px] p-4 hover:cursor-pointer' onClick={handleClick}>
      <img className='rounded-2xl' src={video.snippet?.thumbnails.medium.url}/>
      <div className='flex gap-2 my-2'>
        {channelLogo && <img className='rounded-full w-10 h-10' src={channelLogo}/> }
        <div>
          <span className='font-semibold line-clamp-2'>{video.snippet.title}</span>
          <p className='text-gray-500 text-sm font-medium'>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
