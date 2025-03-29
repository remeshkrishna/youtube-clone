import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { Provider } from 'react-redux'
import { appStore } from './store/appStore.js'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Body from './components/Body.jsx'
import DisplayVideo from './components/DisplayVideo.jsx'
import MainScreen from './components/MainScreen.jsx'
import LiveVideos from './components/LiveVideos.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '',
        element: <MainScreen/>
      },
      {
        path: '/watch',
        element: <DisplayVideo/>
      },
      {
        path: '/live',
        element: <LiveVideos/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
