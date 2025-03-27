import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { Provider } from 'react-redux'
import { appStore } from './store/appStore.js'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Body from './components/Body.jsx'
import DisplayVideo from './components/DisplayVideo.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '',
        element: <Body/>
      },
      {
        path: '/watch',
        element: <DisplayVideo/>
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
