import _ from 'lodash';
import { FETCH_RECIPES, FETCH_RECIPE } from '../actions';

export default function(state = {}, action){
    switch (action.type){
        case FETCH_RECIPES:
            return action.payload.data;
        case FETCH_RECIPE:
            return action.payload.data;
        default:
            return state;
    }
}