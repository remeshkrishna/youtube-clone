import React from 'react'
import { useSearchParams } from 'react-router-dom'

const DisplayVideo = () => {
    const [params] = useSearchParams()
    const videoId = params.get('v')
  return (
    <div className='grid grid-cols-4 h-screen pt-[80px] pl-[40px]'>
        <div className='col-span-3'>
            <iframe className='w-full h-[90%] rounded-2xl' src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
  )
}

export default DisplayVideo
