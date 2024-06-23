import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider,createHashRouter} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'


const router = createHashRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '/',
        element : <HomePage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
