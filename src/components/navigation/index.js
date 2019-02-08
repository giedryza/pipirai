import React, { PureComponent } from 'react';

import Navbar from './Navbar';
import Drawer from './Drawer';
import Backdrop from './Backdrop';

class Layout extends PureComponent {
    state = {
        drawerOpen: false,
        scrolled: false
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.scrollHandler);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scrollHandler);
    };

    scrollHandler = () => {
        let scrolled;
        window.scrollY > 200 ? (scrolled = true) : (scrolled = false);
        this.setState({ scrolled });
    };

    drawerToggle = () => {
        this.setState(prevState => {
            return { drawerOpen: !prevState.drawerOpen };
        });
    };

    render() {
        return (
            <>
                <Navbar
                    drawerToggle={this.drawerToggle}
                    scrolled={this.state.scrolled}
                    open={this.state.drawerOpen}
                />

                <Drawer
                    show={this.state.drawerOpen}
                    onClick={this.drawerToggle}
                />

                <Backdrop
                    show={this.state.drawerOpen}
                    onClick={this.drawerToggle}
                />

                <main>{this.props.children}</main>
            </>
        );
    }
}

export default Layout;
