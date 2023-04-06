import React, { createContext, useContext, useEffect, useState } from 'react'
import { http, csrf } from '../Services/Api'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'


const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth]= useState({})
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const [cookies, setCookie] = useCookies(['authCookie']);

    const navigate = useNavigate();

    const getUser = async () => {
        const { data } = await http.get('/api/user')
        setUser(data)
        setCookie('authCookie', data, { path: '/' });
        
    }
    useEffect(() => {
        if(!user)
        getUser();
       }, [])
    

    const login = async ({ email, password, setLoading }) => {
        setLoading(true);

        await csrf();
        
        try {
            await http.post('/login', { email, password })
            await getUser()
            navigate('/dashboard')
        } catch (e) {
            if(e.response.status == 422) {
                setErrors(e.response.data.errors)
            }
        }
        setLoading(false);
    }

    const register = async ({ name, email, password, setLoading }) => {
        setLoading(true);
        await csrf();
        try {
            await http.post('/register', { name, email, password })
            await getUser()
            navigate('/dashboard')
        } catch (e) {
            if(e.response.status == 422) {
                setErrors(e.response.data.errors)
            }
        }
        setLoading(false);
    }
    

    const logout = () => {
        http.post('/logout').then(() => {
            setUser(null)
            navigate('/')
        })
    }

    return <AuthContext.Provider value={{ auth, setAuth, user, errors, getUser, login, register, logout }}>
        { children }
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}