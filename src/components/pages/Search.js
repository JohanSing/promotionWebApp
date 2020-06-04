import React from 'react'
import projects from '../../datas/projects.json'
import categories from '../../datas/categories.json'
import posts from '../../datas/posts.json'
import Input from '../atoms/Input'
import styled from 'styled-components'
import Card from '../molecules/Card'
const search = (text, categoryChosen = null, typeOfSearch = null) => {
  let postsRetrieved = [],
    projectsRetrieved = []
  projectsRetrieved = projects.map(project => {
    return project.title.includes(text) || project.description.includes(text)
  })
  postsRetrieved = posts.map(post => {
    return post.title.includes(text) || post.description.includes(text)
  })
  return [projectsRetrieved, postsRetrieved]
}

const Search = () => {
  return <resultSearchContainer></resultSearchContainer>
}
const resultSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default Search
