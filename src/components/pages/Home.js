import React from 'react'
import styled from 'styled-components'
import projects from '../../datas/projects.json'
import posts from '../../datas/posts.json'

const Home = () => {
  return (
    <Container>
      <ProjectContainer>
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
      </ProjectContainer>
      <PostContainer>
        {posts.map(post => {
          return (
            <Card key={post.id}>
              <Title>Title: {post.title}</Title>
              <Date>Created at: {post.created_at}</Date>
              <Description>
                <ul>
                  <li>Description : {post.description}</li>
                  <li>Author: {post.author}</li>
                  <li>Type: {post.type}</li>
                </ul>
              </Description>
            </Card>
          )
        })}
      </PostContainer>
    </Container>
  )
}

export default Home

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
  display: flex;
  justify-content: space-between;
`

const ProjectContainer = styled.div`
  background-color: #fff;
  font-weight: 300;
  width: 100%;
  padding: 25px;
`

const PostContainer = styled.div`
  background-color: #fff;
  font-weight: 300;
  width: 100%;
  padding: 25px;
`

const Card = styled.div`
  background-color: #fff;
  font-weight: 300;
  width: 90%;
  -webkit-box-shadow: -12px -2px 34px -3px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: -12px -2px 34px -3px rgba(0, 0, 0, 0.56);
  box-shadow: -12px -2px 34px -3px rgba(0, 0, 0, 0.56);
  padding: 10px;
  margin: 10px;
  border-radius: 7px;
`
