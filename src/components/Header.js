import React from 'react'
import { NavLink } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

class Header extends React.Component {
     constructor(props) {
          super(props)
          this.state = {

          }
          this.handleMenuClick = this.handleMenuClick.bind(this);

     }

     /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
     handleMenuClick() {
          var x = document.getElementsByClassName("mobile-menu");
          console.log(x.HTMLCollection)
          // if (x.style.display === "block") {
          //      x.style.display = "none";
          // } else {
          //      x.style.display = "block";
          // }
     }

     render() {
          return (
               <header className="header">

                    <div className="navigation-menu">
                         <FaBars
                              onClick={this.handleMenuClick}
                              className="menu-home-active"
                         />
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
          )
     }
}

export default Header