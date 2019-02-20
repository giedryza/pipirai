import React, { Component } from 'react';

import MenuItem from './MenuItem';

import padazas01 from '../../../assets/img/menu/padazas01.png';
import padazas02 from '../../../assets/img/menu/padazas02.png';
import padazas03 from '../../../assets/img/menu/padazas03.png';
import padazas04 from '../../../assets/img/menu/padazas04.png';
import prieskoniai01 from '../../../assets/img/menu/prieskoniai01.png';
import prieskoniai02 from '../../../assets/img/menu/prieskoniai02.png';
import prieskoniai03 from '../../../assets/img/menu/prieskoniai03.png';
import prieskoniai04 from '../../../assets/img/menu/prieskoniai04.png';
import prieskoniai05 from '../../../assets/img/menu/prieskoniai05.png';
import dzemas01 from '../../../assets/img/menu/dzemas01.png';
import dzemas02 from '../../../assets/img/menu/dzemas02.png';
import dzemas03 from '../../../assets/img/menu/dzemas03.png';
import alyvuoges01 from '../../../assets/img/menu/alyvuoges01.png';
import alyvuoges02 from '../../../assets/img/menu/alyvuoges02.png';
import alyvuoges03 from '../../../assets/img/menu/alyvuoges03.png';

class Menu extends Component {
    state = {
        menu: [
            {
                title: 'Aitriosios Jalapeno paprikos stipriame marinate (pjaustytos)',
                image: padazas01,
                category: 'Marinuotos aitriosios paprikos',
                prices: [{ quantity: 90, price: 3.0 }, { quantity: 145, price: 3.5 }]
            },
            {
                title: 'Aitriosios Jalapeno paprikos švelniame marinate (pjaustytos)',
                image: padazas02,
                category: 'Marinuotos aitriosios paprikos',
                prices: [{ quantity: 90, price: 3.0 }]
            },
            {
                title: 'Aitriųjų paprikų mišinys medaus marinate (pjaustytos)',
                image: padazas03,
                category: 'Marinuotos aitriosios paprikos',
                prices: [{ quantity: 115, price: 3.3 }, { quantity: 180, price: 4.0 }]
            },
            {
                title: 'Universalus prieskoninių žolelių mišinys (be druskos)',
                image: prieskoniai01,
                category: 'Prieskoninių žolelių mišiniai',
                prices: [
                    { quantity: 30, price: 1.8 },
                    { quantity: 50, price: 3.3 },
                    { quantity: 100, price: 6.5 }
                ]
            },
            {
                title: 'Žolelių mišinys su cukinijomis ir moliūgais (be druskos)',
                image: prieskoniai02,
                category: 'Prieskoninių žolelių mišiniai',
                prices: [
                    { quantity: 30, price: 1.8 },
                    { quantity: 50, price: 3.3 },
                    { quantity: 100, price: 6.5 }
                ]
            },
            {
                title: 'Prieskoniai su kopūstais (be druskos)',
                image: prieskoniai03,
                category: 'Prieskoninių žolelių mišiniai',
                prices: [
                    { quantity: 30, price: 1.8 },
                    { quantity: 50, price: 3.3 },
                    { quantity: 100, price: 6.5 }
                ]
            },
            {
                title: 'Aromatinga druska su rytietiškais akcentais',
                image: prieskoniai04,
                category: 'Prieskoninių žolelių mišiniai',
                prices: [{ quantity: 100, price: 2.0 }]
            },
            {
                title: 'Pomidorų druska su bazilikais',
                image: prieskoniai05,
                category: 'Prieskoninių žolelių mišiniai',
                prices: [{ quantity: 100, price: 2.0 }]
            },
            {
                title: 'Pomidorų ir cukinijų pagardas su aitriosiomis paprikomis',
                image: padazas04,
                category: 'Pagardai',
                prices: [{ quantity: 300, price: 3.5 }]
            },
            {
                title: 'Firminis pagardas Gardžika',
                image: padazas01,
                category: 'Pagardai',
                prices: [{ quantity: 300, price: 3.5 }]
            },
            {
                title: 'Žalios marinuotos alyvuogės',
                image: alyvuoges01,
                category: 'Alyvuogės',
                prices: [
                    { quantity: 80, price: 2.5 },
                    { quantity: 120, price: 3.5 },
                    { quantity: 160, price: 5.0 }
                ]
            },
            {
                title: 'Juodos marinuotos alyvuogės',
                image: alyvuoges02,
                category: 'Alyvuogės',
                prices: [
                    { quantity: 80, price: 2.5 },
                    { quantity: 120, price: 3.5 },
                    { quantity: 160, price: 5.0 }
                ]
            },
            {
                title: 'Alyvuogės plastikiniame indelyje',
                image: alyvuoges03,
                category: 'Alyvuogės',
                prices: [{ quantity: 200, price: 5.5 }, { quantity: 540, price: 11.0 }]
            },
            {
                title: 'Moliūgų džemas su citrinomis ir aitriosiomis paprikomis',
                image: dzemas01,
                category: 'Džemai',
                prices: [{ quantity: 130, price: 2.5 }]
            },
            {
                title: 'Pomidorų džemas su aitriosiomis paprikomis',
                image: dzemas02,
                category: 'Džemai',
                prices: [{ quantity: 130, price: 2.5 }]
            },
            {
                title: 'Svogūnų džemas su aitriosiomis paprikomis',
                image: dzemas03,
                category: 'Džemai',
                prices: [{ quantity: 130, price: 2.5 }]
            }
        ],
        renderedMenu: [],
        categories: [],
        selectedCategory: 'Visi produktai'
    };

    componentDidMount = () => {
        this.setState({
            renderedMenu: this.state.menu,
            categories: this.generateCategories()
        });
    };

    generateCategories = () => {
        let categories = [];

        categories = this.state.menu.map(({ category }) => category);
        categories = Array.from(new Set(categories));
        categories = ['Visi produktai', ...categories];

        return categories;
    };

    filterMenu = category => {
        let { menu } = this.state;

        if (category !== 'Visi produktai') {
            menu = menu.filter(item => item.category === category);
        }

        this.setState({
            renderedMenu: menu,
            selectedCategory: category
        });
    };

    renderMenu = () =>
        this.state.renderedMenu.map(item => <MenuItem key={item.title} item={item} />);

    renderButtons = () => {
        const { categories, selectedCategory } = this.state;

        return categories.map(category => (
            <button
                key={category}
                className={
                    category === selectedCategory ? 'menu__btn menu__btn--selected' : 'menu__btn'
                }
                type="button"
                onClick={() => this.filterMenu(category)}
            >
                {category}
            </button>
        ));
    };

    render() {
        return (
            <section id="menu" className="menu">
                <div className="menu__buttons">{this.renderButtons()}</div>
                <ul className="menu__list">{this.renderMenu()}</ul>
            </section>
        );
    }
}

export default Menu;
