export const GET_CATEGORIES = 'GET_CATEGORIES'
export const REGISTER_PROJECT = 'REGISTER_PROJECT'

export const getCategories = () => ({
  type: GET_CATEGORIES
})

export const createProject = form => ({
  type: REGISTER_PROJECT,
  payload: form
})
