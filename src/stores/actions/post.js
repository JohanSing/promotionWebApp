export const GET_POSTS = 'GET_POSTS'
export const CREATE_POST = 'CREATE_POST'

export const getPosts = () => ({
  type: GET_POSTS
})

export const createPost = payload => ({
  type: CREATE_POST,
  payload: payload
})

export const addNewPost = payload => dispatch => {
  const posts = JSON.parse(localStorage.getItem('posts'))

  posts.push(payload)

  localStorage.setItem('posts', JSON.stringify(posts))

  dispatch(createPost(payload))
}
