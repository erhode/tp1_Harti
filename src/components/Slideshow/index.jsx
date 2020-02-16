import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import { Slides } from '../Slides/index.jsx';
import { Navbar } from '../Navbar/index.jsx';

var slidesDatas = [
    {type: 'title', title: 'Cours', visible: true, notes: ""},
    {type: 'content', title: 'TP 1', text: "Le TP porte sur des rappels de developpement Web", visible: false, notes: "ce transparent est caché"},
    {type: 'content', title: 'TP 2', text: "Le TP porte sur la creation d'un outil de presentation HTML", visible: true, notes: ""},
    {type: 'content', title: 'TP 3', text: "Le TP 3", visible: true, notes: ""},
    {type: 'content', title: 'TP 4', text: "Le TP 4", visible: true, notes: ""},
    {type: 'title', title: 'Question ?', visible: true, notes: ""},
];

export class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index : 0
        };
    }
    onClick(newIndex) {
        console.log('in Parent, onClick', newIndex);
        this.setState({
            index: newIndex
        })
    }
    onChange(newIndex) {
        console.log('in Parent, onChange', newIndex);
        this.setState({
            index: newIndex
        })
    }
    render() {
        return (
            <div id="slideshow">
                <Slides slideData = { slidesDatas[this.state.index] }  />
                <Navbar onClick={this.onClick.bind(this)} onChange={this.onChange.bind(this)} index={this.state.index} slideDatas={slidesDatas} />
            </div>
        );
    }
}
