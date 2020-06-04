import { GET_AUTH } from '../actions/auth'

const initialState = {
  authUser: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        authUser: action.payload
      }
    default:
      return state
  }
}
