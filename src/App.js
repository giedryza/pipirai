import React from 'react';
import './assets/sass/main.scss';

import Navigation from './components/navigation';

import Showcase from './components/header/Showcase';
import Products from './components/products/Products';
import Testimonial from './components/testimonial/Testimonial';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

const App = () => (
    <Navigation>
        <Showcase />
        <Products />
        <Testimonial />
        <Contacts />
        <Footer />
    </Navigation>
);

export default App;
