import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/index.jsx';
import { Content } from './components/Content/index.jsx';
import { Slideshow } from './components/Slideshow/index.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends React.Component {
    render() {
        return (
            <div className="container">
                <Slideshow  />
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);