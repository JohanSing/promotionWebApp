import axios from 'axios'
import moment from 'moment'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_GITHUB_PROJECTS = 'GET_GITHUB_PROJECTS'
export const GET_GITHUB_PROJECT = 'GET_GITHUB_PROJECT'
export const REGISTER_PROJECT = 'REGISTER_PROJECT'

export const getCategories = () => ({
  type: GET_CATEGORIES
})

export const getGithubProjects = (projects, username) => ({
  type: GET_GITHUB_PROJECTS,
  payload: projects,
  username: username
})

export const getGithubProject = project => ({
  type: GET_GITHUB_PROJECT,
  payload: project
})

export const createProject = form => ({
  type: REGISTER_PROJECT,
  payload: form
})

export const getGithubRepositories = () => async dispatch => {
  const access_token = JSON.parse(localStorage.getItem('security_access'))
    .access_token
  axios
    .get('https://api.github.com/user/repos?type=owner', {
      headers: { Authorization: `Bearer ${access_token}` }
    })
    .then(response => {
      let projects = response.data.map(project => {
        return {
          id: project.name,
          name: project.name
        }
      })
      dispatch(getGithubProjects(projects, response.data[0].owner.login))
    })
}

export const getGithubRepository = (
  projectOwner,
  projectName
) => async dispatch => {
  const access_token = JSON.parse(localStorage.getItem('security_access'))
    .access_token
  let templateForm = {
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
  axios
    .get(`https://api.github.com/repos/${projectOwner}/${projectName}`, {
      headers: { Authorization: `Bearer ${access_token}` }
    })
    .then(response => {
      let project = response.data
      templateForm.title = project.name
      templateForm.description =
        project.description === null ? '' : project.description
      templateForm.lastRelease = moment(project.pushed_at).format('YYYY-MM-DD')
      templateForm.license =
        project.license === null ? '' : project.license.name
    })
    .then(() => {
      axios
        .get(
          `https://api.github.com/repos/${projectOwner}/${projectName}/issues`
        )
        .then(response => {
          templateForm.nbIssues = response.data.length
        })
    })
    .then(() => {
      axios
        .get(
          `https://api.github.com/repos/${projectOwner}/${projectName}/releases`
        )
        .then(response => {
          templateForm.nbReleases = response.data.length
        })
    })
    .then(() => {
      axios
        .get(
          `https://api.github.com/repos/${projectOwner}/${projectName}/contributors`
        )
        .then(response => {
          templateForm.nbContributors = response.data.length
        })
    })
    .then(() => {
      dispatch(getGithubProject(templateForm))
    })
}
