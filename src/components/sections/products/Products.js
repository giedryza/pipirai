import React, { Component } from 'react';

import Modal from '../../layout/modal/Modal';
import ProductsItem from './ProductsItem';

import pipirai from '../../../assets/img/01.jpg';
import padazai from '../../../assets/img/02.jpg';
import seklos from '../../../assets/img/03.jpg';

class Products extends Component {
    state = {
        modalOpen: false,
        selectedProduct: null,
        products: [
            {
                lead: 'Užauginta Lietuvoje',
                label: 'Aitriosios paprikos',
                shortDescription:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elitektulos gitulun septa lotus. Harum magni ab placeat doloremque suscipit.',
                longDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus in quibusdam dignissimos? Dicta ipsum incidunt minus cupiditate facilis atque, sequi adipisci nesciunt mollitia exercitationem dolor laborum modi, repellat architecto quaerat quas iusto. Est impedit veritatis obcaecati iusto iure incidunt quos praesentium quia iste corporis fugiat perspiciatis nisi aliquid in quisquam neque magni, assumenda, commodi voluptatum dicta dignissimos. Nulla molestias veniam saepe veritatis nesciunt, commodi nostrum voluptates quam fugiat quas quis iusto iste, minima ea ipsam quibusdam. Nemo quis dolores ratione vitae sit possimus. Adipisci necessitatibus voluptatem maiores sapiente accusamus. Esse officia consectetur libero sequi eius vero suscipit dolore possimus.',
                img: pipirai
            },
            {
                lead: 'Rankų darbo',
                label: 'Padažai ir pagardai',
                shortDescription:
                    'Lorem ipsum dolor sit amet, consectetur ektulos gitulun septa lotus adipisicing elit. Harum magni ab placeat doloremque suscipit.',
                longDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus in quibusdam dignissimos? Dicta ipsum incidunt minus cupiditate facilis atque, sequi adipisci nesciunt mollitia exercitationem dolor laborum modi, repellat architecto quaerat quas iusto. Est impedit veritatis obcaecati iusto iure incidunt quos praesentium quia iste corporis fugiat perspiciatis nisi aliquid in quisquam neque magni, assumenda, commodi voluptatum dicta dignissimos. Nulla molestias veniam saepe veritatis nesciunt, commodi nostrum voluptates quam fugiat quas quis iusto iste, minima ea ipsam quibusdam. Nemo quis dolores ratione vitae sit possimus. Adipisci necessitatibus voluptatem maiores sapiente accusamus. Esse officia consectetur libero sequi eius vero suscipit dolore possimus.',
                img: padazai
            },
            {
                lead: 'Nuo silpnų iki stiprių',
                label: 'Sėklos',
                shortDescription:
                    'Lorem ipsum dolor sit amet, consectetur ektulos gitulun septa lotus adipisicing elit. Harum magni ab placeat doloremque suscipit.',
                longDescription:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus in quibusdam dignissimos? Dicta ipsum incidunt minus cupiditate facilis atque, sequi adipisci nesciunt mollitia exercitationem dolor laborum modi, repellat architecto quaerat quas iusto. Est impedit veritatis obcaecati iusto iure incidunt quos praesentium quia iste corporis fugiat perspiciatis nisi aliquid in quisquam neque magni, assumenda, commodi voluptatum dicta dignissimos. Nulla molestias veniam saepe veritatis nesciunt, commodi nostrum voluptates quam fugiat quas quis iusto iste, minima ea ipsam quibusdam. Nemo quis dolores ratione vitae sit possimus. Adipisci necessitatibus voluptatem maiores sapiente accusamus. Esse officia consectetur libero sequi eius vero suscipit dolore possimus.',
                img: seklos
            }
        ]
    };

    modalToggle = selectedProduct => {
        const body = document.querySelector('body');
        const scrollbarWidth = window.innerWidth - body.clientWidth;

        if (!this.state.modalOpen) {
            body.setAttribute('style', `overflow: hidden; padding-right: ${scrollbarWidth}px;`);
        } else {
            body.removeAttribute('style');
        }

        this.setState(prevState => {
            return {
                modalOpen: !prevState.modalOpen,
                selectedProduct: selectedProduct
            };
        });
    };

    renderProducts = () =>
        this.state.products.map(product => (
            <ProductsItem
                key={product.label}
                product={product}
                modalToggle={() => this.modalToggle(product)}
            />
        ));

    render() {
        return (
            <section className="products" id="products">
                <Modal
                    show={this.state.modalOpen}
                    modalToggle={() => this.modalToggle(null)}
                    product={this.state.selectedProduct}
                />
                <ul className="products__list">{this.renderProducts()}</ul>
            </section>
        );
    }
}

export default Products;
