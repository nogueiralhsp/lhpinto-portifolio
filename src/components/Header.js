import React from 'react'
import { NavLink } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

class Header extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               menuActive: false,
               windowWidth: window.innerWidth
          }
          this.handleMenuClick = this.handleMenuClick.bind(this)
          this.startWindscreenSize = this.startWindscreenSize.bind(this)
          this.topMenu = this.topMenu.bind(this)

     }

     /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
     handleMenuClick() {
          if (this.state.menuActive) {
               this.setState(() => ({ menuActive: false }))
          } else {
               this.setState(() => ({ menuActive: true }))
          }
     }
     startWindscreenSize() {
          if (window.innerWidth > 540) {
               return false //returns false if on mobile
          } else {
               return true //returns true if on laptop/desktop
          }

     }
     topMenu() {
          return (
               <ul className="mobile-menu">
                    <li><NavLink to="/" className="mobile-menu-link" exact={true}>Home</NavLink></li>
                    <li><NavLink to="/skills" className="mobile-menu-link">Skills</NavLink></li>
                    <li><NavLink to="/about" className="mobile-menu-link">About</NavLink></li>
                    <li><NavLink to="/contact" className="mobile-menu-link">Contact</NavLink></li>
               </ul>
          )
     }

     render() {
          return (
               <header className="header">
                    <div className="navigation-menu">
                         <div className="menu-button">
                              <h3>
                                   <FaBars
                                        onClick={this.handleMenuClick}
                                        className="menu-FaBars"
                                   />
                              </h3>
                         </div>
                         {this.startWindscreenSize() && this.state.menuActive || !this.startWindscreenSize() ? this.topMenu() : ''}
                    </div>
               </header>
          )
     }
}

export default Header