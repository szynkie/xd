import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import './index.css'

import NavBar from "./components/NavBar/NavBar"
import Menu from "./components/Menu/Menu";

function StartApp(){
  return (
    <Router>
      <NavBar/>
      <div className="test">
      <div className="left"><Menu/></div>
      <div className="main">main</div>
      </div>
      </Router>
  
  )
}

ReactDom.render(<StartApp/>,document.getElementById('root'))