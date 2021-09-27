import React from 'react'
import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';

const Footer = () => (
     <div className="footer">
          <div className="footer-icon-container">
               <a href="https://www.linkedin.com/in/luizhenriquepinto/" target="blank">
                    <FaLinkedin className="footer-icon" />
               </a>
               <a href="https://github.com/nogueiralhsp" target="blank">
                    <FaGithub className="footer-icon" />
               </a>
               
               <div className="footer-contact">
                    <p>Contact <br />
                    Phone: 074 8227 5310 <br />
                    Email: nogueiralhsp@gmail.com <br />
                    Or use my <a href="/contact">contact page</a></p>
                    
               </div>
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