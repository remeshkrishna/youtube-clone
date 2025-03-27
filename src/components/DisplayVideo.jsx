import React from 'react'
import { useSearchParams } from 'react-router-dom'

const DisplayVideo = () => {
    const [params] = useSearchParams()
    const videoId = params.get('v')
  return (
    <div className='col-span-10 pl-[220px] w-full h-screen'>
        <div className='col-span-3 w-3/4 h-[90%]'>
            <iframe className='w-full h-[90%] rounded-2xl' src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
  )
}

export default DisplayVideo
