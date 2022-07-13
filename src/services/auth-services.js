import axios from 'axios';

export const LoginService = async ({email, password}) => {
    return axios.post('/api/auth/login', { email, password })
}
