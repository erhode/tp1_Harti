import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

import { Slide } from '../Slide/index.jsx';

export class Slides extends React.Component {
    render() {
        return (
            <div id="slides">
                <Slide slideData = { this.props.slideData }  />
            </div>
        );
    }
}
