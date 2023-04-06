import { createContext, useEffect, useState } from 'react'
import { useAuth } from './useAuth';

export const AuthContext = createContext({user: null,
    setUser: () => {},});


export const AuthProvider = ({children}) => {
    const { user, setUser, getItem } = useAuth();


    return (<AuthContext.Provider value={{user, setUser}}>
    { children }
    </AuthContext.Provider>);
}

export default AuthProvider;
