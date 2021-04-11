import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
     <header className="header">

          <div className="navigation-menu">
               <ul className="mobile-menu">
                    <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
                    <li><NavLink to="/skills" activeClassName="is-active">Skills</NavLink></li>
                    <li><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
               </ul>
          </div>
          <div className="header-name">
               <h2>Luiz Henrique Pinto</h2>
               <a href="/contact"><p>nogueiralhsp@gmail.com</p></a>

          </div>
     </header>
);

export default Header