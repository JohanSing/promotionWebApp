import { GET_AUTH } from '../actions/auth'

const initialState = {
  authUser: {
    access_token: null,
    user: {
      photoURL: null,
      displayName: null
    }
  }
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
