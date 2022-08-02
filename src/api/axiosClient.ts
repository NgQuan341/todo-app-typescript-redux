import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://62d6faf149c87ff2af30dfe3.mockapi.io/api',
    headers: {
        'content-type': 'application/json',
    }
})
export default axiosClient