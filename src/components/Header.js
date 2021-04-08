import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
     <header className="header">

          <div className="navigation-menu">
               <ul className="mobile-menu">
                    <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
                    <li><NavLink to="/skills" activeClassName="is-active">Skills</NavLink></li>
                    <li><NavLink to="/about" activeClassName="is-active" exact={true}>About</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="is-active" exact={true}>Contact</NavLink></li>
               </ul>
          </div>
          <div className="header-name">
               <a href="/contact"><h2>Luiz Henrique Pinto</h2></a>
               <p>nogueiralhsp@gmail.com</p>

          </div>
     </header>
);

export default Header