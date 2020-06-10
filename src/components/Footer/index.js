import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsappSquare, FaPhone } from 'react-icons/fa';
import {MdEmail } from 'react-icons/md';

import '../Footer/styles.css';

function Footer(){
    return (
        
        <footer className="footer"  id="home">
        <div className="menufooter">
        <nav>
            <ul>
                <li><a href="https://www.linkedin.com/in/fernando-reis-79b643144/"><FaLinkedin size='2rem'/></a></li>
                <li><a href="https://github.com/fernandoreis9173"><FaGithub size='2rem'/></a></li>
                <li><a arial-label="e-mail" href="mailto:fernandoreis9173@gmail.com"> <MdEmail class="navbar-brand" size='2.5rem'/></a></li>  
                 <li> <FaWhatsappSquare size='2rem'/></li> 
                    <p>(92) 99984-5104</p>
                 <li> <FaPhone size='2rem'/></li>
                    <p>(92) 99461-4367</p>
            </ul>
          </nav>  
        </div>
        </footer>
      
    );
}

export default Footer;