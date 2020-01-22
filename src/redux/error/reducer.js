import actions from './action'
const initState = {}

export default function errorReducer (state = initState, action) {
  const { payload } = action
  switch (action.type) {
    case actions.UPDATE_ERROR_STATES:
      return {
        ...state,
        ...action.target
      }
    case actions.RESET_ERROR_STATES:
      if (payload && Array.isArray(payload)) {
        let stateToBeReset = {}
        payload.forEach(key => {
          stateToBeReset[key] = initState[key]
        })
        return {
          ...state,
          ...stateToBeReset
        }
      } else {
        return {
          ...state
        }
      }
    default:
      return state
  }
}
