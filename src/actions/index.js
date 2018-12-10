import axios from 'axios';

export const FETCH_RECIPES = 'fetch_recipes';

const ROOT_URL = 'http://localhost:3000/'
// const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';

export function fetchRecipes() {
    const request = axios.get(`${ROOT_URL}`);
    return {
        type: FETCH_RECIPES,
        payload: request
    };
}