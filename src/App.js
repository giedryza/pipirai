import React from 'react';
import './assets/sass/main.scss';

import Header from './components/header/Header';
import Products from './components/products/Products';
import Testimonial from './components/testimonial/Testimonial';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

const App = () => (
    <>
        <Header />
        <main>
            <Products />
            <Testimonial />
            <Contacts />
            <Footer />
        </main>
    </>
);

export default App;
