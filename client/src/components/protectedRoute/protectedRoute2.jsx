import React from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute2 extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('authToken')
       
        return isAuthenticated ? (
            <Redirect to={{ pathname: '/home' }} />
        ) : (
            <Component />
        );
    }
}

export default ProtectedRoute2;