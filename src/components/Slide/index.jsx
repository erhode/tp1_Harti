import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

export class Slide extends React.Component {
    render() {
        return (
            <div id="slide">
                <h1>{this.props.slideData.type}</h1>
                <h1>{this.props.slideData.title}</h1>
                <h1>{this.props.slideData.text}</h1>
            </div>
        );
    }
}
