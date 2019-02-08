import React from 'react';

const ProductsItem = ({ product }) => (
    <li className="products__item">
        <div className="products__about">
            <p className="products__lead">{product.lead}</p>
            <h3 className="products__label">{product.label}</h3>
            <p className="products__description">{product.shortDescription}</p>
            <a href="/" className="button button--dark">
                Plačiau
            </a>
        </div>
        <img className="products__img" src={product.img} alt={product.label} />
    </li>
);

export default ProductsItem;
