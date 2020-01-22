const actions = {
  UPDATE_LOADING_STATES: 'UPDATE_LOADING_STATES',
  RESET_LOADING_STATES: 'RESET_LOADING_STATES',
  resetLoadingRedux: payload => ({
    type: actions.RESET_LOADING_STATES,
    payload
  })
}
export default actions
