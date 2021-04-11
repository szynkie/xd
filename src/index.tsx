import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

import NavBar from "./components/NavBar/NavBar"

function StartApp(){
  return (
  <NavBar/>
  )
}

ReactDom.render(<StartApp/>,document.getElementById('root'))