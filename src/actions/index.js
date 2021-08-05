import axios from 'axios';

export const getPermission = () =>{
    return axios.get('http://localhost:3030')
    .then(response => response.data);
}