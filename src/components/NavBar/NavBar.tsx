import React, { Component } from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import DropDown from '../DropDown/DropDown'
import logo from '../../logo.png'
import Search from "../Search/Search";

class NavBar extends Component {
    state = {clicked: false}
    dropdown = {clicked: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavBarItems">
                <img src={logo} alt="" className="company-logo"/>
                <h1 className="navbar-logo" onClick={this.handleClick}><i className="fas fa-home"/>Menu<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-sort-down'}/>
                <i onClick={this.handleClick} className={this.state.clicked ? 'dropdown-menu' : 'dropdown-menu-clicked'}><DropDown /></i></h1>
                <Search/>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className="nav-links">
                                <i className={item.cName} />
                                <Link to={item.url}/>
                            </li>
                        )
                    })}
                    </ul>
            </nav>
        )
    }
}

const MenuItems = [
    {
        title: 'Home',
        url: '#',
        cName: 'fas fa-home'
    },
     {
        title: 'Messages',
        url: '#',
        cName: 'fas fa-inbox'
    },
     {
        title: 'Notifications',
        url: '#',
        cName: 'fas fa-bell'
    },
]

export default NavBar