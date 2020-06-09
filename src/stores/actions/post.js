import posts from '../../datas/posts.json'

export const GET_POSTS = 'GET_POSTS'

export const initPosts = () => dispatch => {
  localStorage.setItem('posts', JSON.stringify(posts))
  dispatch(getPosts())
}

export const getPosts = () => ({
  type: GET_POSTS
})

export const addNewPost = payload => dispatch => {
  const posts = JSON.parse(localStorage.getItem('posts'))

  posts.push(payload)

  localStorage.setItem('posts', JSON.stringify(posts))

  dispatch(getPosts())
}
