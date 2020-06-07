import { GET_USER_PROJECTS } from '../actions/userProjects'
import projects from '../../datas/projects.json'
import categories from '../../datas/categories.json'
import moment from 'moment'

const initialState = {
  projects: []
}

const getUserProjects = () => {
  let projectsStorage = localStorage.getItem('projects')
  if (projectsStorage === null || projectsStorage === undefined) {
    projectsStorage = []
  } else {
    projectsStorage = JSON.parse(projectsStorage)
  }
  let allProjects = projects.concat(projectsStorage)
  let userId = JSON.parse(localStorage.getItem('security_access')).user
    .providerData[0].uid
  return allProjects.filter(project => {
    if (project.userId === userId) {
      let category = categories.filter(categorie => {
        if (`${categorie.id}` === `${project.categoryId}`) {
          return categorie
        }
      })[0]
      project.category = category.name
      project.created_at = moment(project.createdAt).format(
        'YYYY-MM-DD HH:mm:ss'
      )
      return project
    }
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROJECTS:
      return {
        ...state,
        projects: getUserProjects()
      }
    default:
      return state
  }
}
