import React from 'react';

const Links = ({ drawerClose }) => {
    const links = [
        { label: 'Titulinis', linkto: 'home' },
        { label: 'Veikla', linkto: 'products' },
        { label: 'Produktai', linkto: 'menu' },
        { label: 'Kontaktai', linkto: 'contacts' }
    ];

    const renderLinks = () =>
        links.map(link => (
            <li key={link.label}>
                <a href={`#${link.linkto}`} className="links__link" onClick={drawerClose}>
                    {link.label}
                </a>
            </li>
        ));

    return <ul className="links">{renderLinks()}</ul>;
};

export default Links;
