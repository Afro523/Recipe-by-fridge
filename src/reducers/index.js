import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipes';

const rootReducer = combineReducers({
  recipe: RecipeReducer
});

export default rootReducer;
