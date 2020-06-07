import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Template from '../templates/ClientTemplate'
import Card from '../molecules/Card'
import { getUserProjects } from '../../stores/actions/userProjects'

const UserProjects = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const themeState = useSelector(state => state.global.theme)
  const projects = useSelector(state => state.userProjects.projects)

  useEffect(() => {
    dispatch(getUserProjects())
  }, [dispatch])

  return (
    <Template colorBackground={themeState.colors.backgroundMain}>
      <HomeContainer>
        <ItemsContainer
          mediumScreen={themeState.sizes.tablet}
          largeScreen={themeState.sizes.laptop}
          FourKScreen={themeState.sizes.desktopL}
        >
          {projects.map((value, index) => {
            if (value === undefined || value === null) return
            return (
              <Card
                key={index}
                color={themeState.colors.btnBackgroundPrimaryHover}
                fontColor={themeState.colors.fontMain}
                title={value.title}
                category={value.category}
                description={value.description}
                date={value.created_at}
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

export default UserProjects
