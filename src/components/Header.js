import React from 'react'
import { NavLink } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

const Header = () => (
     <header className="header">

          <div className="navigation-menu">
               <div className="menu-home-active">
                    <FaBars />
               </div>
               <ul className="mobile-menu">
                    <li><NavLink to="/" className="mobile-menu-link" exact={true}>Home</NavLink></li>
                    <li><NavLink to="/skills" className="mobile-menu-link">Skills</NavLink></li>
                    <li><NavLink to="/about" className="mobile-menu-link">About</NavLink></li>
                    <li><NavLink to="/contact" className="mobile-menu-link">Contact</NavLink></li>

               </ul>

          </div>

          <div className="header-name">
               <h2>Luiz Henrique Pinto</h2>
               <a href="/contact"><p>nogueiralhsp@gmail.com</p></a>

          </div>
     </header>
);

export default Header