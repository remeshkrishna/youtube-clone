import React, { useState,useEffect } from 'react'
import { API_KEY } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addLiveComments } from '../store/videoSlice'

const LiveComments = ({videoId}) => {
    const dispatch = useDispatch()
    const selector = useSelector((store)=>store.video.liveComments)
    const [liveChatId,setLiveChatId] = useState(null)
    const fetchLiveChatId = async()=>{
        const data = await fetch('https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id='+videoId+'&key='+API_KEY)
        const dataJson = await data.json()
        const liveChat = dataJson.items[0].liveStreamingDetails.activeLiveChatId
        setLiveChatId(liveChat)
    }
    const fetchLiveComments = async()=>{
        const data = await fetch('https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId='+liveChatId+'&part=snippet,authorDetails&key='+API_KEY)
        const dataJson = await data.json()
        dispatch(addLiveComments(dataJson.items))
    }

    useEffect(()=>{
        fetchLiveChatId()
    },[])

    useEffect(()=>{
        if(liveChatId){
            const interval= setInterval(()=>{fetchLiveComments()},5000)
            return ()=>{
                clearInterval(interval)
            }  
        }
    },[liveChatId])
  return (
    <div className='w-1/4 h-[80%] overflow-auto border border-gray-400 mt-2 rounded-2xl mr-2'>
        
        <ul >
        <li className='w-full font-semibold border-b border-gray-400 p-2 fixed bg-white rounded-t-2xl'>Live Chat</li>
            {selector?.map((item)=><li key={item.id} className='flex gap-2 p-1 hover:bg-gray-200'>
                <img className='w-6 h-6 rounded-full' src={item.authorDetails.profileImageUrl}/>
            {item.snippet.displayMessage}
            </li>)}
        </ul>
      
    </div>
  )
}

export default LiveComments
