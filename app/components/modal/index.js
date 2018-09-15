import React from 'react';
import Login from './login'

const ModalManager = props => {
    switch(props.currentModal) {
        case 'LOGIN':
        return <Login/>;
        default:
        return null
        break;
    }
}
export default ModalManager;