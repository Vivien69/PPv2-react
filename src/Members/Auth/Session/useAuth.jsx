import { useUser } from './useUser';
import { http, csrf } from '../../../Services/Api'
import { useNavigate } from 'react-router-dom'
import { httpClient } from '../../../Services/ApiClient'
import { useAuthContext } from './AuthContext';

export const useAuth = () => {

    const navigate = useNavigate()
    const { addToken, addUser, removeUser } = useUser();
    const { setAdmin } = useAuthContext();

    // useEffect(() => {
    //     const user = localStorage.getItem('user');
    //     const token = localStorage.getItem('token');

    //     if (user && user != 'undefined') {
    //         addUser(JSON.parse(user));
    //     }
    //     if (token && token != 'undefined') {
    //         addToken(token);
    //     }

    // }, []);

    const login = async ({email, password, remember, services, setServices}) => {
        setServices({errors:null, loading:true})   
        csrf()
        await http.post('/login', { email, password, remember }).then(res => {
            res.data.user.role == 'ADMIN' ? setAdmin(true) : setAdmin(false)
            delete res.data.user.role;
            addUser( res.data.user);
            addToken(res.data.token);
            navigate('/dashboard')
        })
        .catch(e => {
            console.log(e)
            switch (e.response) {
                case 422:
                    setServices({errors:e.response.data.errors})
                    break;
                default:
                    setServices({errors:'Serveur inaccessible'})
                    break;
            }
        });
        setServices({...services, loading:false})

    };

    const register = async ( {name, email, password, services, setServices} ) => {

        setServices({errors:null, loading:true})

        csrf()
        await http.post('/register', { name, email, password })
        .then(res => {
            addUser(res.data.user)
            addToken(res.data.token)
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
        httpClient.post('/logout')
        .then(res => {
            removeUser();
            navigate('/')
        })
        .catch(e => {
            console.log(e)
        })
        
    };

    const getUserData = (name) => {
        csrf()
        http.get('api/users/'+name)
        .then(res => {
            return res.data;
        })
        .catch(e => {
            switch (e.response?.status) {
                case 422:
                    return e.response.data.errors
                break;
                default:
                    return 'Serveur inaccessible';
                break;
            }
        })
    }


    return {login, logout, register, getUserData };
    };