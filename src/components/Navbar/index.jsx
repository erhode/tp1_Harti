import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export class Navbar extends React.Component {
    onClick(i) {
        this.props.onClick(i);
    }

    onChange(i) {
        console.log("onChange Navbar: "+i);
        this.props.onChange(i);
    }

    incIndex() {
        var i = this.props.index + 1;
        var max = this.props.slideDatas.length;
        i = (i==max) ? --i : i;
        this.props.onClick(i);
    }

    decIndex() {
        var i = this.props.index - 1;
        i = i<0 ? 0 : i;
        this.props.onClick(i);
    }

    render() {
        const dropDownItems = []

        for (const [index, value] of this.props.slideDatas.entries()) {
            dropDownItems.push(
                <Dropdown.Item onClick={this.onChange.bind(this, index)} >{this.props.slideDatas[index].title}</Dropdown.Item>
            )
        }

        return (
            <div id="navbar">
                <div id="left">
                    <Button variant="outline-primary" onClick={this.decIndex.bind(this)}>Préc</Button>
                    <Button variant="outline-primary" onClick={this.incIndex.bind(this)}>Suiv</Button>
                </div>

                <div id="right">
                    <DropdownButton id="dropdown-basic-button" title="Select Page">

                        { dropDownItems }

                    </DropdownButton>
                </div>
            </div>
        );
    }
}
