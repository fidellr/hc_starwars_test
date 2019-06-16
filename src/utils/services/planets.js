import axios from 'axios';
import { BASE_API_URL, PLANETS_PATH } from './constants';

const fetchPlanets = () => axios.request({
    method: 'GET',
    baseURL: BASE_API_URL,
    url: PLANETS_PATH,
});

export {
    fetchPlanets,
}