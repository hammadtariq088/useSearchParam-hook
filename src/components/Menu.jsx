import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu-bar">
           <NavLink activeClassName="active-menu" to="/" >Home</NavLink>
           <NavLink activeClassName="active-menu" to="/about" >About</NavLink>
           <NavLink activeClassName="active-menu" to="/service" >Service</NavLink>
           <NavLink activeClassName="active-menu" to="/contact" >Contact</NavLink>
           <NavLink activeClassName="active-menu" to="/user" >User</NavLink>
           <NavLink activeClassName="active-menu" to="/movies" >Movies</NavLink>
        </div>
    )
}

export default Menu;
