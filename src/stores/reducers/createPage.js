import { GET_CATEGORIES } from '../actions/createPage'

import categories from '../../datas/categories.json'

const initialState = {
  categories: []
}
const getCategories = () => {
  return categories.map(category => {
    return {
      id: category.id,
      name: category.name
    }
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: getCategories()
      }
    default:
      return state
  }
}
