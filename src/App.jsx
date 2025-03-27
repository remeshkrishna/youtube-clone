import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import {Outlet,} from 'react-router-dom'
import MainScreen from './components/MainScreen'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <Header/>
      <Body/>
    </div>
  )
}

export default App