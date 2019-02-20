import React from 'react';
import './assets/sass/main.scss';

import Navigation from './components/layout/navigation';

import Showcase from './components/sections/showcase/Showcase';
import Menu from './components/sections/menu/Menu';
import Products from './components/sections/products/Products';
import Testimonial from './components/sections/testimonial/Testimonial';
import Contacts from './components/sections/contacts/Contacts';
import Footer from './components/sections/footer/Footer';

const App = () => (
    <Navigation>
        <Showcase />
        <Products />
        <Menu />
        <Testimonial />
        <Contacts />
        <Footer />
    </Navigation>
);

export default App;
