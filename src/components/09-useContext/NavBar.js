import React from 'react';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="nav">
            
            <NavLink exact activeClassName="active" to="/" className="nav-link" >Home</NavLink>
            <NavLink exact activeClassName="active" to="/login" className="nav-link" >Login</NavLink>
            <NavLink exact activeClassName="active" to="/about" className="nav-link" >About</NavLink>
            
        </nav>
    )
}
