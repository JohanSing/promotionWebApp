import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import moment from 'moment'

import Template from '../templates/ClientTemplate'
import Card from '../molecules/Card'
import projects from '../../datas/projects.json'
import categories from '../../datas/categories.json'

const Home = () => {
  const { t } = useTranslation()
  const themeState = useSelector(state => state.global.theme)
  const [items, setItems] = useState([])

  const retrievePostsAndProjects = () => {
    let postsRetrieved = [],
      projectsRetrieved = []
    projectsRetrieved = projects.filter(project => {
      return project
    })

    postsRetrieved = JSON.parse(localStorage.getItem('posts')).filter(post => {
      return post
    })

    projectsRetrieved = projectsRetrieved.map(project => {
      let category = categories.filter(categorie => {
        if (categorie.id === project.categoryId) {
          return categorie
        }
      })[0]

      project.category = category.name
      project.created_at = moment(project.createdAt).format('YYYY-MM-DD')

      return project
    })

    return projectsRetrieved.concat(postsRetrieved)
  }

  useEffect(() => {
    setItems(retrievePostsAndProjects())
  }, [])

  return (
    <Template>
      <HomeContainer>
        <ItemsContainer
          mediumScreen={themeState.sizes.tablet}
          largeScreen={themeState.sizes.laptop}
          FourKScreen={themeState.sizes.desktopL}
        >
          {items.map((value, index) => {
            if (value === undefined || value === null) return
            return (
              <Card
                key={index}
                color={themeState.colors.btnBackgroundPrimaryHover}
                fontColor={themeState.colors.fontMain}
                title={value.title}
                category={value.category}
                description={value.description}
                date={value.createdAt}
                type={value.type}
                link='#'
                linkName={t('cardLink')}
                numberLike={value.numberLike}
              />
            )
          })}
        </ItemsContainer>
      </HomeContainer>
    </Template>
  )
}

const HomeContainer = styled.div`
  display: flex;
  padding: 6em 4em;
  justify-content: space-between;
  flex-direction: column;
`

const ItemsContainer = styled.div`
  padding: 0.4em;
  display: grid;
  grid-gap: 0.5rem;
  @media ${props => props.mediumScreen} {
    grid-template-columns: repeat(2, 30em);
  }
  @media ${props => props.largeScreen} {
    grid-template-columns: repeat(3, 26em);
  }
  @media ${props => props.FourKScreen} {
    grid-template-columns: repeat(7, 26em);
  }
`

export default Home
