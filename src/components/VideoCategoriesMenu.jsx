import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVideoList, addChannelInfo } from '../store/videoSlice'
import { API_KEY } from '../utils/constants'


const VideoCategoriesMenu = () => {
  const dispatch = useDispatch()
  const [videoCategories,setVideoCategories]=useState(null)
  const videos = useSelector((store)=>store.video.videoList)

  const fetchVideoCategories=async()=>{
    const data=await fetch('https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key='+API_KEY)
    const dataJson = await data.json()
    setVideoCategories(dataJson.items)
  }

  // const fetchChannel = async ()=>{
  //   const channelList = videos.map((item)=>item.snippet.channelId).join(',')
  //   const data = await fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet,status&id='+channelList+'&key='+API_KEY)
  //   const dataJson = await data.json()
  //   dispatch(addChannelInfo(dataJson.items.map((item)=>{[item.id] = item})))
  // }

  const handleClick = async(id="")=>{
    let url;
    console.log(id)
    if(id==""){
      url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`
    }
    else{
      url=`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&videoCategoryId=${id}&maxResults=50&key=${API_KEY}`
    } 
    const data=await fetch(url)
    const dataJson = await data.json()
    dispatch(addVideoList(dataJson.items))
  }

  useEffect(()=>{
    fetchVideoCategories()
    handleClick()
    console.log(videos)
    // if(videos){
    //   fetchChannel()
    // }
    

  },[])
  return (
    <div className='overflow-x-hidden'>
        <ul className='flex gap-4'>
            <button onClick={()=>handleClick()}><li  className='min-w-15 p-2 m-2 bg-gray-100 rounded-xl font-semibold hover:cursor-pointer hover:bg-gray-200 text-center'>All</li></button>
            {videoCategories?.map((item)=> <li className='min-w-fit p-2 m-2 bg-gray-100 rounded-xl font-semibold hover:cursor-pointer hover:bg-gray-200' key={item.id}><button onClick={()=>handleClick(item.id)}>{item.snippet.title}</button></li>)}
        </ul>
      
    </div>
  )
}

export default VideoCategoriesMenu
