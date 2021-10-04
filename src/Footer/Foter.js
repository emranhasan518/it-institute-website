import React from 'react';
import './Foter.css'
const Footer = () => {
    return (
        <div className="footer">
            <p className="text-center welcome-text"> Wellcome to you in <span className="text-danger"> Creative It Institute</span></p>
            <i class="fab fa-youtube text-danger youtube"></i> <p className="youtube-text">Follow Our Youtube</p><br />
            <i class="fab fa-facebook facebook"></i> <p className="facebook-text">Join us in Facebook</p>
        </div>
    );
};

export default Footer;