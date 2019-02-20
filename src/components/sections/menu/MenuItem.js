import React from 'react';

const MenuItem = ({ item: { title, image, prices } }) => (
    <li key={title} className="menu__card">
        <img src={image} alt={title} className="menu__img" />
        <h3 className="menu__title">{title}</h3>

        {prices.map(({ price, quantity }, i) => (
            <div key={i} className="menu__details">
                <h5 className="menu__price">&euro;{price.toFixed(2)}</h5>
                <h4 className="menu__quantity">{quantity}g</h4>
            </div>
        ))}
    </li>
);

export default MenuItem;
