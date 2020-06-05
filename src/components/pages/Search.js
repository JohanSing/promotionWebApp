import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import Template from '../templates/ClientTemplate'
import Input from '../atoms/Input'
import styled from 'styled-components'
import Card from '../molecules/Card'
import { searchElement } from '../../stores/actions/searchPage'

const Search = () => {
  const { t } = useTranslation()
  const themeState = useSelector(state => state.global.theme)
  const resultSearch = useSelector(state => state.searchPage.data)
  const dispatch = useDispatch()

  return (
    <Template colorBackground={themeState.colors.backgroundMain}>
      <SearchContainer>
        <div>
          <Input
            labelName={t('searchInput')}
            inputColor={themeState.colors.btnFontPrimary}
            type='text'
            onChange={event => dispatch(searchElement(event.target.value))}
          />
        </div>
        <ResultSearchContainer
          mediumScreen={themeState.sizes.tablet}
          largeScreen={themeState.sizes.laptop}
          FourKScreen={themeState.sizes.desktopL}
        >
          {resultSearch.map((value, index) => {
            if (value === undefined || value === null) return
            return (
              <Card
                key={index}
                color={themeState.colors.btnBackgroundPrimaryHover}
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
        </ResultSearchContainer>
      </SearchContainer>
    </Template>
  )
}
const SearchContainer = styled.div`
  display: flex;
  padding: 4em;
  justify-content: space-between;
  flex-direction: column;
`

const ResultSearchContainer = styled.div`
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
export default Search
