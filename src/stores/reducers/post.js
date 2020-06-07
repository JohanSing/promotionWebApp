import { GET_POSTS, CREATE_POST } from '../actions/post'

const initialState = {
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: JSON.parse(localStorage.getItem('posts'))
      }
    case CREATE_POST:
      return {
        ...state,
        posts: state.posts.push(action.payload)
      }
    default:
      return state
  }
}
