import React from 'react'
import PropTypes from 'prop-types'
import projects from '../../datas/projects.json'
import styled from 'styled-components'

const Project = () => {
  return (
    <Container>
      {projects.map(project => {
        return (
          <Card key={project.id}>
            <Title>Title: {project.title}</Title>
            <Date>Created at: {project.createdAt}</Date>
            <Description>
              <ul>
                <li>Is private : {project.isPrivate}</li>
                <li>Categorie: {project.Categorie}</li>
                <li>Contribution number: {project.nbContributors}</li>
                <li>License: {project.license}</li>
                <li>Number of Releases: {project.nbReleases}</li>
                <li>Number of issues: {project.nbIssues}</li>
              </ul>
            </Description>
          </Card>
        )
      })}
    </Container>
  )
}

export default Project

const Title = styled.h2`
  color: #000;
  font-weight: 300;
`

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`

const Description = styled.p`
  color: #000;
  font-weight: 300;
`
const Container = styled.div`
  background-color: #fff;
  font-weight: 300;
  width: 100%;
  padding: 25px;
`

const Card = styled.div`
  background-color: #fff;
  font-weight: 300;
  width: 40%;
  -webkit-box-shadow: -12px -2px 34px -3px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: -12px -2px 34px -3px rgba(0, 0, 0, 0.56);
  box-shadow: -12px -2px 34px -3px rgba(0, 0, 0, 0.56);
  padding: 10px;
  margin: 10px;
  border-radius: 7px;
`