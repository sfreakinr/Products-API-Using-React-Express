import axios from 'axios';

const API_URL = 'https://products-api-express.onrender.com/products';


//fetch product
export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log("API Response:", response.data); 
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }


};

