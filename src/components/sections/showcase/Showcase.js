import React from 'react';
import logo from '../../../assets/img/logo.png';

const Showcase = () => (
    <header className="showcase" id="home">
        <div className="showcase__content">
            <img src={logo} alt="logo" className="showcase__logo" />
            <h1 className="showcase__heading">Piprės ūkis</h1>
            <p className="showcase__description">
                Lietuviškas ūkis, auginantis įvairių rūšių aitriąsias paprikas
            </p>
            <a href="#products" className="button">
                Produkcija
            </a>
        </div>
    </header>
);

export default Showcase;
