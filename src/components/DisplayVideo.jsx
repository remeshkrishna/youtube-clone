import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import CommentList from './CommentList'
import LiveComments from './LiveComments'

const DisplayVideo = () => {
    const videoSelector = useSelector((store)=>store.video.videoList)
    const channels = useSelector((store)=>store.video.channelInfo)
    const [params] = useSearchParams()
    const videoId = params.get('v')
    const video = videoSelector?.filter((item)=>item.id === videoId || item.id?.videoId==videoId)[0]
    const channel_logo = channels?.[video?.snippet.channelId]?.snippet.thumbnails.default.url
    const channel_name = channels?.[video?.snippet.channelId]?.snippet.title
  return (
    <div className={'col-span-9  w-full h-screen overflow-y-scroll flex gap-2'}>
        <div className=' w-3/4 h-[90%]'>
            <iframe className='w-full h-[90%] rounded-2xl' src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <p className='font-semibold text-2xl py-2'>{video?.snippet.title}</p>
            <div className='flex gap-2 place-items-center'>
              <img className='rounded-full w-12 h-12' src={channel_logo} alt='channel icon' />
              <p>{channel_name}</p>
            </div>
        </div>
        {(!video?.id?.videoId)? <CommentList/>:<LiveComments videoId={video?.id?.videoId}/>}
      </div>
  )
}

export default DisplayVideo
