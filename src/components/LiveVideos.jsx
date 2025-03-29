import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'
import VideoCard from './VideoCard'
import { useDispatch, useSelector } from 'react-redux'
import { addVideoList,addChannelInfo } from '../store/videoSlice'


const LiveVideos = () => {
    const [liveVideos,setLiveVideos] = useState([])
    const videos = useSelector((store)=>store.video.videoList)
    const dispatch = useDispatch()
    const fetchLiveVideos = async()=>{
        const data = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&eventType=live&key='+API_KEY)
        const res = await data.json()
        setLiveVideos(res.items)
        dispatch(addVideoList(res.items))
    }
    const fetchChannel = async ()=>{
        const channelList = liveVideos.map((item)=>item.snippet.channelId).join(',')
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
        fetchLiveVideos() 
    },[])

    useEffect(()=>{
        if(liveVideos){
            fetchChannel()
        }
    },[liveVideos])
  return (
    <div className='col-span-9  w-full h-screen overflow-y-scroll'>
        <div className='flex flex-wrap'>
            {liveVideos?.map((item)=><VideoCard key={item.id.videoId} video={item} type={'live'} channelId={item.snippet.channelId}/>)}
        </div>
    </div>
    
  )
}

export default LiveVideos
