import React, { Component, createContext } from 'react';

// invoke createContext function
export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }
    // function to toggle current Auth
    toggleAuth = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated });
    }
    render() {
        return ( 
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                { this.props.children }
            </AuthContext.Provider>
         );
    }
}

export default AuthContextProvider;