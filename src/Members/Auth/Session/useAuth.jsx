import { useState, useEffect } from 'react';
import { useUser } from './useUser';
import { useLocalStorage } from './useLocalStorage';
import { http, csrf } from '../../../Services/Api'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate()
    const { addUser, removeUser } = useUser();
    const { getItem } = useLocalStorage();

    useEffect(() => {
        const user = getItem('user');
        if (user) {
            addUser({user:JSON.parse(user)});
        }
    }, []);

    const login = async ({email, password, setServices}) => {
        setServices({errors:null, loading:true})
        await csrf();
    
        try {
            // await http.get('/oauth/clients')
            // .then(response => {
            //     console.log(response.data);
            // });
            await http.post('/login', { email, password }).then(res => {
                addUser(res.data);
                navigate('/dashboard')
            })
            
    
        } catch (e) {
            switch (e.response.status) {
                case 422:
                    setServices({errors:e.response.data.errors})
                    break;
                default:
                    setServices({errors:'Serveur inaccessible'})
                    break;
            }
        }
        setServices({...services, loading:false})

    };

    const register = async ( {name, email, password, services, setServices} ) => {
        setServices({errors:null, loading:true})

        await csrf();
        await http.post('/register', { name, email, password })
        
        .then(res => {
            addUser({user:res.data});
            navigate('/dashboard')
        })
        .catch(e => {
            switch (e.response?.status) {
                case 422:
                    setServices({errors:e.response.data.errors})
                    break;
                default:
                    setServices({errors:'Serveur inaccessible'})
                    break;
            }
        })
           
        setServices({...services, loading:false})
    }


    const logout = () => {
        removeUser();
    };

    return { user, setUser, getItem, login, logout, register };
    };