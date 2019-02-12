import React from 'react';
import { Link } from 'react-scroll';

const Links = ({ drawerClose }) => {
    const links = [
        { label: 'Pagrindinis', linkto: 'showcase' },
        { label: 'Produktai', linkto: 'products' },
        { label: 'Kontaktai', linkto: 'contacts' }
    ];

    const renderLinks = () =>
        links.map(link => (
            <li key={link.label}>
                <Link
                    to={link.linkto}
                    className="links__link"
                    activeClass="links__link--selected"
                    onClick={drawerClose}
                    smooth={true}
                    spy={true}
                    duration={500}
                    delay={90}
                    offset={-80}
                >
                    {link.label}
                </Link>
            </li>
        ));

    return <ul className="links">{renderLinks()}</ul>;
};

export default Links;
