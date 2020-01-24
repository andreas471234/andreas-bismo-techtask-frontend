const actions = {
  GET_INGREDIENT_LIST_REQUEST: 'GET_INGREDIENT_LIST_REQUEST',
  GET_INGREDIENT_LIST_SUCCESS: 'GET_INGREDIENT_LIST_SUCCESS',
  GET_INGREDIENT_LIST_FAILURE: 'GET_INGREDIENT_LIST_FAILURE',

  GET_RECIPE_LIST_REQUEST: 'GET_RECIPE_LIST_REQUEST',
  GET_RECIPE_LIST_SUCCESS: 'GET_RECIPE_LIST_SUCCESS',
  GET_RECIPE_LIST_FAILURE: 'GET_RECIPE_LIST_FAILURE',

  getIngredientList: () => ({ 
    type: actions.GET_INGREDIENT_LIST_REQUEST
  }),
  getRecipeList: payload => ({ 
    type: actions.GET_RECIPE_LIST_REQUEST,
    payload
  })
};

export default actions;