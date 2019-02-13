import React from 'react';

const MenuButton = ({ onClick, open }) => (
    <button className={open ? 'hamburger open' : 'hamburger'} onClick={onClick}>
        <span className="hamburger--line" />
        <span className="hamburger--line" />
        <span className="hamburger--line" />
    </button>
);

export default MenuButton;
