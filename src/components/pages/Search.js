import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Input from '../atoms/Input'
import styled from 'styled-components'
import Card from '../molecules/Card'
import { searchElement } from '../../stores/actions/searchPage'

const Search = () => {
  const themeState = useSelector(state => state.global.theme)
  const resultSearch = useSelector(state => state.searchPage.data)
  const dispatch = useDispatch()

  return (
    <SearchContainer>
      <div>
        <Input
          placeholder='Entrez quelque chose pour commencer la rechercher'
          inputColor={themeState.colors.btnFontPrimary}
          type='text'
          labelName='Recherche'
          onChange={event => dispatch(searchElement(event.target.value))}
        />
      </div>
      <ResultSearchContainer largeScreen={themeState.sizes.laptop}>
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
              linkName='Lire la suite >'
              numberLike={value.numberLike}
            />
          )
        })}
      </ResultSearchContainer>
    </SearchContainer>
  )
}
const SearchContainer = styled.div`
  display: flex;
  padding: 2em;
  justify-content: space-between;
  flex-direction: column;
`

const ResultSearchContainer = styled.div`
  padding: 0.4em;
  display: grid;
  grid-gap: 0.5rem;
  @media ${props => props.largeScreen} {
    grid-template-columns: repeat(3, 26em);
  }
`
export default Search
