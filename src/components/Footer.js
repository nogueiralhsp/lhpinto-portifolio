import React from 'react'
import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';

const Footer = () => (
     <div className="footer">
          <div className="footer-name">
               <h2>Luiz Henrique Pinto</h2>
               <a href="/contact"><p>nogueiralhsp@gmail.com</p></a>

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

// to include when I have my CV made for this functinoality
// it is using my linkedin for now
//<div>
//   <button className="button">
//        <a href="https://www.linkedin.com/in/luizhenriquepinto/" target="blank">DOWNLOAD MY CV</a>
//   </button>
//</div>