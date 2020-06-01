import React from 'react'
import PropTypes from 'prop-types'
import posts from '../../datas/posts.json'
import styled from 'styled-components'

const Posts = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default Posts

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
