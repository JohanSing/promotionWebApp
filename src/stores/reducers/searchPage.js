import { SEARCH_ELEMENT } from '../actions/searchPage'

import projects from '../../datas/projects.json'
import posts from '../../datas/posts.json'
import categories from '../../datas/categories.json'
import moment from 'moment'
const initialState = {
  data: []
}

const searchEngine = text => {
  let postsRetrieved = [],
    projectsRetrieved = []
  projectsRetrieved = projects.filter(project => {
    if (project.title.includes(text) && !project.isPrivate) {
      return project
    }
  })

  postsRetrieved = posts.filter(post => {
    if (post.title.includes(text) || post.description.includes(text)) {
      return post
    }
  })

  projectsRetrieved = projectsRetrieved.map(project => {
    let category = categories.filter(categorie => {
      if (categorie.id === project.categoryId) {
        return categorie
      }
    })[0]
    project.category = category.name
    project.created_at = moment(project.createdAt).format('YYYY-MM-DD HH:mm:ss')
    return project
  })
  return projectsRetrieved.concat(postsRetrieved)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ELEMENT:
      return {
        ...state,
        data: searchEngine(action.value)
      }
    default:
      return state
  }
}
