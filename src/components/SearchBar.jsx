import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchQuery } from '../store/videoSlice'
import { API_KEY } from '../utils/constants'

const SearchBar = () => {
  const [query,setQuery] = useState(null)
  const dispatch = useDispatch()
  const selector = useSelector((store)=>store.video.searchQueries?.[query])
  const [showSuggestion,setShowSuggestion] = useState(false)

  const fetchSuggestions= async(q)=>{
    const data = await fetch('https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q='+q+'&hl=en&gl=us&key='+API_KEY)
    const dataJson = await data.text()
    const suggestions = JSON.parse(dataJson.slice(dataJson.indexOf('(')+1,dataJson.lastIndexOf(')')))[1]
    dispatch(addSearchQuery({[query]:suggestions.map((item)=>item[0])}))
  }

  const handleSelectSuggestion=(val)=>{
    console.log(val)
    setShowSuggestion(false)
    setQuery(val)
  }

  useEffect(()=>{
    if(query && !selector){
      const timer = setTimeout(()=>{
        fetchSuggestions(query);
      },500)
      
      return ()=>{
        console.log("timeout cleared")
        clearTimeout(timer);
      }
    }
    
  },[query])

  return (
    <div  className='w-[50%] col-span-2 m-1'>
      <form onSubmit={(e)=>e.preventDefault()} className='border border-gray-400 flex rounded-4xl m-1'>
        <input
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            onChange={(e)=>setQuery(e.target.value)}
            className='w-[85%] border-r border-gray-300 rounded-l-4xl pl-4'
            type='text'
            placeholder='Search'
            value={query==null?'':query}
        />
        <button className='p-2 bg-gray-100 h-[100%] w-[15%] place-items-center rounded-r-4xl hover:cursor-pointer'>
            <img className='w-6 h-6' src='/src/assets/search.png'/>
        </button>
      </form>
      {selector && showSuggestion && <ul className=' bg-white fixed w-1/4 shadow-2xl rounded-2xl border border-gray-200 py-4'>
        {selector.map((item,index)=><li key={item+index} className='hover:bg-gray-100 w-full px-4 py-1'><button className='w-full text-start' value={item} onMouseDown={(e)=>handleSelectSuggestion(e.target.value)}>{item}</button></li>)}
      </ul>}
      
    </div>
  )
}

export default SearchBar
