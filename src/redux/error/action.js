const actions = {
  UPDATE_ERROR_STATES: 'UPDATE_ERROR_STATES',
  RESET_ERROR_STATES: 'RESET_ERROR_STATES',
  resetErrorRedux: payload => ({
    type: actions.RESET_ERROR_STATES,
    payload
  })
}
export default actions
