import React from 'react'
import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';

const Footer = () => (
     <div className="footer">
          <div>
               <button className="button">
                    <a href="https://www.linkedin.com/in/luizhenriquepinto/" target="blank">DOWNLOAD MY CV</a>
               </button>
          </div>
          <div className="footer-icon-container">
               <a href="https://www.linkedin.com/in/luizhenriquepinto/" target="blank">
                    <FaLinkedin className="footer-icon" />
               </a>
               <a href="https://github.com/nogueiralhsp" target="blank">
                    <FaGithub className="footer-icon" />
               </a>
               <a
                    href="https://codepen.io/henriquenogueira" target="blank">
                    <FaCodepen className="footer-icon" />
               </a>
          </div>
     </div>
);

export default Footer