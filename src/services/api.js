import axios from 'axios';

const baseUrl = 'https://fakestoreapi.com'
    
const getProducts = async () => {
    const response = await axios.get(`${baseUrl}/products`)
    return response.data
} 

export {getProducts}

