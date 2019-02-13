import React from 'react';
import logo from '../../../assets/img/logo.png';

const Footer = () => {
    const currentYear = () => new Date().getFullYear();

    return (
        <footer className="footer">
            <img src={logo} alt="logo" className="footer__logo" />
            <p className="footer__legal">
                &copy; {currentYear()} Visos teisės saugomos
            </p>
        </footer>
    );
};

export default Footer;
