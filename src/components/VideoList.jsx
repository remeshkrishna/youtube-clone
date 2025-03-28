import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import { addChannelInfo } from '../store/videoSlice'
import { API_KEY } from '../utils/constants'

const VideoList = () => {
    const videos = useSelector((store)=>store.video.videoList)
    const dispatch = useDispatch()
    //console.log(videos)
    

    const fetchChannel = async ()=>{
        const channelList = videos?.map((item)=>item.snippet.channelId).join(',')
        const data = await fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet,status&id='+channelList+'&key='+API_KEY)
        const dataJson = await data.json()
        if(dataJson.items){
           dispatch(addChannelInfo(dataJson?.items?.reduce((acc,item)=>{
            acc[item.id]=item
            return acc
           },{})))
        }
        
    }

    useEffect(()=>{
      fetchChannel()
    },[videos])
    
    if(!videos){
        return null
    }
  return (
    <div className='flex flex-wrap'>

        {videos.map((item)=><VideoCard key={item.id} video={item} channelId={item.snippet.channelId}/>)}
    </div>
  )
}

export default VideoList
