import React from 'react';

import Hamburger from './Hamburger';

const Navbar = ({ drawerToggle, scrolled, open }) => (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <Hamburger onClick={drawerToggle} open={open} />
    </nav>
);

export default Navbar;
