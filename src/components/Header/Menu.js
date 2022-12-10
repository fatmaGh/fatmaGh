import React from 'react';
import {NavLink} from 'react-router-dom'
import './Menu.css'
import logo from '../../images/logo.png'



const Menu = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <a href='/'><img className='logo' src={logo} height='250px' width='250px' /></a>
            </div>
            <nav>            
                <NavLink className='link' activeClassName='activeLink' exact to='/' >Home</NavLink>
                <NavLink className='link' activeClassName='activeLink' exact to='/about'>About</NavLink>
                <NavLink className='link' activeClassName='activeLink' exact to='/resume'>Resume</NavLink>
                <NavLink className='link' activeClassName='activeLink' exact to='/portfolio'>Portfolio</NavLink>
                {/* <NavLink className='link' activeClassName='activeLink' exact to='/#contact'>Contact</NavLink> */}
                <a className='link' href="mailto:fatma.ghaarsallah@gmail.com">Contact</a>                
            </nav>
        </div>
    )
}

export default Menu
