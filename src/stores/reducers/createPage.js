import { GET_CATEGORIES } from '../actions/createPage'
import { REGISTER_PROJECT } from '../actions/createPage'

import categories from '../../datas/categories.json'
import projects from '../../datas/projects.json'
import moment from 'moment'
const initialState = {
  categories: [],
  success: ''
}
const getCategories = () => {
  return categories.map(category => {
    return {
      id: category.id,
      name: category.name
    }
  })
}
const registerProject = project => {
  console.log(project)
  let projectsStorage = localStorage.getItem('projects')
  project.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  project.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss')
  if (projectsStorage === null || projectsStorage === undefined) {
    projectsStorage = []
  } else {
    projectsStorage = JSON.parse(projectsStorage)
  }
  let allProjects = projects.concat(projectsStorage)
  let valueMax = 0
  let maxId =
    allProjects.reduce((projectFound, valueMax) => {
      if (valueMax < project.id) {
        valueMax = project.id
      }
    }) + 1
  project.id = maxId
  projectsStorage.push(project)
  localStorage.setItem('projects', JSON.stringify(projectsStorage))
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: getCategories()
      }
    case REGISTER_PROJECT:
      registerProject(action.payload)
      return { ...state }
    default:
      return state
  }
}
