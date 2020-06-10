import React, {Component} from 'react';
import './App.css';
import Location from "./components/map";
export default class App extends Component {

    render() {
        return (
            <div>
            <div className="App" />
            <Location/>
            </div>
        );
    }
}
