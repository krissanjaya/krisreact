import axios, {AxiosRequestConfig} from 'axios';
import Axios from 'axios';

export interface Credentials {
    username: string,
    password: string
}

interface loginApiResponse {
    username: string,
    token: string
}

export const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = { 
        method: 'post',
        url: process.env.REACT_APP_API_BASE_URL + '/login',
        data
    }
    try{
        const {data: response} = await Axios.request<loginApiResponse>(requestConfig);
        storeToken(response.token);
        return {
            token:response.token
        }
    }catch (e){
        console.error(e);
        return {error: e.response.data.message}
    }
}

export const TOKEN = 'token';

const storeToken = (token:string) => {
    localStorage.setItem(TOKEN, token);
}