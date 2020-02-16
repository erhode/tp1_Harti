import React from 'react'
import LOGO from '../../static/webpack.png';// Import de l'image

export class  Content extends React.Component {
    render() {
        return (
            <img src={LOGO} alt="Logo" />
        );
    }
}
