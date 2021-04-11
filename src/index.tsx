import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

import NavBar from "./components/NavBar/NavBar"

function BookList(){
  return (
  <NavBar/>
  )
}

ReactDom.render(<BookList/>,document.getElementById('root'))