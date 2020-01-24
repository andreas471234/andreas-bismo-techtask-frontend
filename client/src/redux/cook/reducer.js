import actions from './action';

const initState = {
  ingredientList: [],
  recipeList: [],
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_INGREDIENT_LIST_SUCCESS:
    case actions.GET_INGREDIENT_LIST_FAILURE:
      return {
        ...state,
        ingredientList: action.data
      }
      case actions.GET_RECIPE_LIST_SUCCESS:
      case actions.GET_RECIPE_LIST_FAILURE:
        return {
          ...state,
          recipeList: action.data
        }
      default:
      return state;
  }
}
