import React from 'react';

import pipirai from '../../assets/img/01.jpg';
import padazai from '../../assets/img/02.jpg';
import seklos from '../../assets/img/03.jpg';

const Products = () => {
    const products = [
        {
            lead: 'Užauginta Lietuvoje',
            label: 'Aitriosios paprikos',
            shortDescription:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elitektulos gitulun septa lotus. Harum magni ab placeat doloremque suscipit.',
            img: pipirai
        },
        {
            lead: 'Rankų darbo',
            label: 'Padažai ir pagardai',
            shortDescription:
                'Lorem ipsum dolor sit amet, consectetur ektulos gitulun septa lotus adipisicing elit. Harum magni ab placeat doloremque suscipit.',
            img: padazai
        },
        {
            lead: 'Nuo silpnų iki stiprių',
            label: 'Sėklos',
            shortDescription:
                'Lorem ipsum dolor sit amet, consectetur ektulos gitulun septa lotus adipisicing elit. Harum magni ab placeat doloremque suscipit.',
            img: seklos
        }
    ];

    const renderProducts = () =>
        products.map(product => (
            <li key={product.label} className="products__item">
                <div className="products__about">
                    <p className="products__lead">{product.lead}</p>
                    <h3 className="products__label">{product.label}</h3>
                    <p className="products__description">
                        {product.shortDescription}
                    </p>
                    <a href="/" className="button button--dark">
                        Plačiau
                    </a>
                </div>
                <img
                    className="products__img"
                    src={product.img}
                    alt={product.label}
                />
            </li>
        ));

    return (
        <section className="products">
            <ul className="products__list">{renderProducts()}</ul>
        </section>
    );
};

export default Products;
