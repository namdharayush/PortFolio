import { Fragment, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import AOS from 'aos'

function App() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <Fragment>
        <Navbar />
        <Outlet />
    </Fragment>
  )
}

export default App
