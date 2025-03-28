import React, { useEffect, useState } from 'react'
import { API_KEY, BEARER_TOKEN } from '../utils/constants'

const SubscriptionList = () => {
    const [subscriptions,setSubscriptions] = useState(null)
    const fetchSubscriptions = async()=>{
        const data = await fetch('https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=50&mine=true',{
            headers: {"Authorization": BEARER_TOKEN}
        }
        )
        const res= await data.json()
        setSubscriptions(res.items)
    }

    useEffect(()=>{
        fetchSubscriptions()
    },[])
  return (
    <>
    {
        subscriptions && subscriptions?.map((item)=><div key={item.id} className='flex p-2 hover:bg-gray-200 rounded-lg gap-8'>
        <img className='w-6 h-6 rounded-full' src={item.snippet.thumbnails.default.url}/>
        <p>{item.snippet.title}</p>
    </div>)
    }
        
    </>
  )
}

export default SubscriptionList
