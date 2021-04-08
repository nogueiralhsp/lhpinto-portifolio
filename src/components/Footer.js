import React from 'react'
import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';


import { SiLinkedin, SiMailDotRu } from 'react-icons/si'
import { BsPhone } from 'react-icons/bs'


const Footer = () => (
     <div className="footer">
          <div>
               <button className="button">
                    <a href="https://www.linkedin.com/in/luizhenriquepinto/" target="_blank">DOWNLOAD MY CV</a>
               </button>
          </div>
          <div className="footer-icon-container">
               <a href="https://www.linkedin.com/in/luizhenriquepinto/" target="_blank">
                    <FaLinkedin className="footer-icon" />
               </a>
               <a href="https://github.com/nogueiralhsp" target="_blank">
                    <FaGithub className="footer-icon" />
               </a>
               <a
                    href="https://codepen.io/henriquenogueira" target="_blank">
                    <FaCodepen className="footer-icon" />
               </a>
          </div>
     </div>
);

export default Footer