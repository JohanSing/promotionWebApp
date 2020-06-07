import {
  GET_CATEGORIES,
  GET_GITHUB_PROJECTS,
  GET_GITHUB_PROJECT
} from '../actions/createProjectPage'
import { REGISTER_PROJECT } from '../actions/createProjectPage'

import categories from '../../datas/categories.json'
import projects from '../../datas/projects.json'
import moment from 'moment'

const templateForm = {
  title: '',
  description: '',
  nbIssues: 0,
  nbReleases: 0,
  isPrivate: false,
  license: '',
  lastRelease: '',
  nbContributors: 0,
  categoryId: null
}

const initialState = {
  categories: [],
  IsRegistered: false,
  listProjects: [],
  createPageForm: templateForm,
  projectsOwner: ''
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
  let projectsStorage = localStorage.getItem('projects')
  project.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  project.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss')
  if (projectsStorage === null || projectsStorage === undefined) {
    projectsStorage = []
  } else {
    projectsStorage = JSON.parse(projectsStorage)
  }
  let allProjects = projects.concat(projectsStorage)
  let maxId =
    allProjects.reduce((accumulator, currentValue) => {
      console.log(accumulator, currentValue)
      if (accumulator.id < currentValue.id) {
        return currentValue
      }
    }).id + 1
  project.id = maxId
  project.userId = JSON.parse(
    localStorage.getItem('security_access')
  ).user.providerData[0].uid
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
    case GET_GITHUB_PROJECTS:
      return {
        ...state,
        listProjects: action.payload,
        projectsOwner: action.username
      }
    case GET_GITHUB_PROJECT:
      return {
        ...state,
        createPageForm: action.payload
      }
    case REGISTER_PROJECT:
      registerProject(action.payload)
      return { ...state, IsRegistered: true }
    default:
      return state
  }
}
