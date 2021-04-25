import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import './index.css'

import NavBar from "./components/NavBar/NavBar"

function StartApp(){
  return (
    <Router><NavBar/></Router>
  
  )
}

ReactDom.render(<StartApp/>,document.getElementById('root'))