import React from 'react';

const ProductsItem = ({ product, modalToggle }) => (
    <li className="products__item">
        <div className="products__about">
            <p className="products__lead">{product.lead}</p>
            <h3 className="products__label">{product.label}</h3>
            <p className="products__description">{product.shortDescription}</p>
            <button onClick={modalToggle} className="button button--dark">
                Plačiau
            </button>
        </div>
        <img className="products__img" src={product.img} alt={product.label} />
    </li>
);

export default ProductsItem;
