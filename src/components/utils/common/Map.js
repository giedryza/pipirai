import React, { Component } from 'react';

class Map extends Component {
    componentDidMount = () => {
        if (!window.google) {
            const api = process.env.REACT_APP_GOOGLE_API;

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://maps.google.com/maps/api/js?key=${api}`;

            const [element] = document.getElementsByTagName('script');
            element.parentNode.insertBefore(script, element);

            script.addEventListener('load', this.initMap);
        } else {
            this.initMap();
        }
    };

    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: this.props.location,
            zoom: this.props.zoom
        });

        new window.google.maps.Marker({
            position: this.props.location,
            map: map
        });
    };

    render() {
        return <div id="map" />;
    }
}

export default Map;
