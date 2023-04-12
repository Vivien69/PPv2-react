import { useState, createContext, useContext} from 'react'
import { useAuth } from './useAuth';

export const AuthContext = createContext({
    user: null,
    token:null,
    admin:null,
    setUser: () => {},
    setToken: () => {},
    setAdmin: () => {}
});



export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [token, _setToken] = useState(localStorage.getItem('token'))
    const [admin, setAdmin] = useState(false)

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }
    



    return (<AuthContext.Provider value={{user, setUser, token, setToken, admin, setAdmin}}>
    { children }
    </AuthContext.Provider>);
}

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
