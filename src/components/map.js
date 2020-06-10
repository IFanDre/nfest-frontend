import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';

export default class Location extends Component {
    state = {
        lat: 45.786947,
        lng: 23.883370,
        zoom: 8,
    };

    render() {
        // const classes = useStyles;
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <div>Hi</div>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Natur Festival
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}
