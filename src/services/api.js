import axios from 'axios';

const getDataApi = () => {
    return axios.get(`https://fakestoreapi.com/products/`);
};


export default getDataApi;
