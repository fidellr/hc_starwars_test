import axios from 'axios';
import { BASE_API_URL, FILMS_PATH } from './constants';
const fetchFilms = () => axios.request({
    method: 'GET',
    baseURL: BASE_API_URL,
    url: FILMS_PATH,
});

export {
    fetchFilms,
};
