import axios from 'axios';
import { BASE_API_URL, STARSHIPS_PATH } from './constants';

const fetchStarships = () => axios.request({
    method: 'GET',
    baseURL: BASE_API_URL,
    url: STARSHIPS_PATH,
});

export {
    fetchStarships,
};
