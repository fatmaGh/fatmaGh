import React from 'react';
import {NavLink} from 'react-router-dom'
import './Menu.css'


const Menu = () => {
    return (
        <div className='header'>
        {/* <div className='logo-container'>
            <h1 className='logo'>fg</h1>
        </div> */}
        <nav>            
            <NavLink className='link' activeClassName='activeLink' exact to='/' >Home</NavLink>
            <NavLink className='link' activeClassName='activeLink' exact to='/about'>About</NavLink>
            <a className='link' href=''>Resume</a>
            <NavLink className='link' activeClassName='activeLink' exact to='/portfolio'>Portfolio</NavLink>
            {/* <NavLink className='link' activeClassName='activeLink' exact to='/#contact'>Contact</NavLink> */}
            <a className='link' href="mailto:fatma.ghaarsallah@gmail.com">Contact</a>                
        </nav>
        </div>
    )
}

export default Menu
