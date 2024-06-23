import { Fragment } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <Fragment>
        <Navbar />
        <Outlet />
    </Fragment>
  )
}

export default App
