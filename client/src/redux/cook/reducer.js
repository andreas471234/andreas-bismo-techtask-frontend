import actions from './action';

const initState = {
  ingredientList: []
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_INGREDIENT_LIST_SUCCESS:
    case actions.GET_INGREDIENT_LIST_FAILURE:
      return {
        ...state,
        ingredientList: action.data
      }
    default:
      return state;
  }
}
