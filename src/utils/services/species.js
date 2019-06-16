import axios from 'axios';
import { BASE_API_URL, SPECIES_PATH } from './constants';

const fetchSpecies = () => axios.request({
    method: 'GET',
    baseURL: BASE_API_URL,
    url: SPECIES_PATH,
});

export {
    fetchSpecies,
};
