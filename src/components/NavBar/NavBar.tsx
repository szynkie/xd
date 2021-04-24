import React, { Component } from 'react'
import './NavBar.css'
import logo from '../../logo.png'

class NavBar extends Component {
    state = {clicked: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavBarItems">
                <img src={logo} alt="" className="company-logo"/>
                <h1 className="navbar-logo" onClick={this.handleClick}><i className="fas fa-home"></i>Menu
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-sort-down'}></i>
                </h1>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                
                                <i className={item.cName} > </i>
                                
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