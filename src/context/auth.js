import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

export const AuthProvider = (props)=> {
    const [isAuth, setIsAuth] = useState(false)
    const loginSucces = () => setIsAuth(true)
    const loginFailed = () => {
        localStorage.removeItem('token')
        setIsAuth(false)
    }
    const logout = () => {
        localStorage.removeItem('token')
        setIsAuth(false)
    }
    return (
        <AuthContext.Provider value={{ isAuth, loginSucces, loginFailed, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}
