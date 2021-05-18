import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './DropDown.css'
import {MenuItems} from '../MenuItem'
class DropDown extends Component{
     state = {clicked: false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <ul onClick={this.handleClick} className={this.state.clicked ? 'dropdown-menu-clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        <i className={item.cName}/>
                        <p>{item.title}</p>
                    <Link to={item.path} onClick={this.handleClick}/></li>
                )
            })}
            </ul>
        )
    }
}
export default DropDown