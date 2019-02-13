import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../../assets/img/logo.png';

const Showcase = () => (
    <div className="showcase">
        <div className="showcase__content">
            <img src={logo} alt="logo" className="showcase__logo" />
            <h1 className="showcase__heading">Piprės ūkis</h1>
            <p className="showcase__description">
                Lietuviškas ūkis, auginantis įvairių rūšių aitriąsias paprikas
            </p>
            <Link
                to="products"
                className="button"
                smooth={true}
                duration={500}
                offset={-80}
            >
                Produkcija
            </Link>
        </div>
    </div>
);

export default Showcase;
