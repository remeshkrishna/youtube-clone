import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'

// const comments = [
//     {
//         comment: "This is a comment1",
//         replies: [

//         ]
//     }
// ]

const CommentList = () => {
    const [comments,setComments] = useState([])
    const fetchComments=async()=>{
        const res = await (await fetch('https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=jRf55yunWDA&maxResults=50&key='+API_KEY)).json()
        setComments(res.items)
    }
    useEffect(()=>{
        fetchComments()
    },[])
  return (
    <div className='flex flex-col gap-4 py-4'>
        <p className='font-semibold text-2xl'>Comments</p>
        {comments?.map((item)=><Comment key={item.id} comment={item.snippet.topLevelComment.snippet.textOriginal} authorProfileIcon={item.snippet.topLevelComment.snippet.authorProfileImageUrl} author={item.snippet.topLevelComment.snippet.authorDisplayName} replies={item.replies}/>)} 
    </div>
  )
}


const Comment = ({comment, authorProfileIcon, author, replies}) =>{
    const [hideReply, setHideReply] =useState(true)
    const toggleReply = ()=>{
        setHideReply(!hideReply)
    }
    return (
        <div className='flex text-sm'>
             <img className='w-9 h-9 mr-2 rounded-full'  src={authorProfileIcon}/>
             <div className='flex flex-col'>
                <p>{author}</p>
                <p>{comment}</p>
                <div className='flex gap-2'>
                    <img className='w-4 h-4' src='/src/assets/like.png'/>
                    <img className='w-4 h-4 rotate-180' src='/src/assets/like.png'/>
                    <button className='font-semibold hover:cursor-pointer'>Reply</button>
                </div>
                {replies&& <div className={`px-4 ${replies?'pt-4':''}`}>
                    <button onClick={toggleReply} className='text-blue-800 font-semibold pb-2 hover:bg-blue-300 rounded-4xl p-1 flex place-items-center'><img className={'w-8 h-8 p-1 '+(!hideReply?'rotate-0':'rotate-180')} src='/src/assets/expand_up_blue.png'/> {replies.comments.length} reply</button>
                   {!hideReply && replies.comments.map((item)=><Comment key={item.id} comment={item.snippet.textOriginal} authorProfileIcon={item.snippet.authorProfileImageUrl} author={item.snippet.authorDisplayName} replies={item.replies}/>)}
                </div>}
                </div>
        </div>
    )
}

export default CommentList
