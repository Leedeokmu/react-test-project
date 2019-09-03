import React from 'react'
import {Link, NavLink} from "react-router-dom";

const activeStyle = {
    color: 'green',
    fontSize: '2rem'
};

const Menu = () => (
    <div>
        <ul>
            {/*<li><Link to="/">Home</Link></li>*/}
            {/*<li><Link to="about">About</Link></li>*/}
            {/*<li><Link to="about/foo">About foo</Link></li>*/}
            <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
            <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
            <li><NavLink to="/about/foo" activeStyle={activeStyle}>About foo</NavLink></li>
            <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
        </ul>
        <hr/>
    </div>
)

export default Menu;