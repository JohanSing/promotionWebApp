import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.section`
  display: flex;
  padding: 0;
  margin: 0;
  margin-top: 1em;
  margin-bottom: 1em;
  justify-content: space-between;
`

const CardSectionContainer = props => {
  return <SectionContainer props>{props.children}</SectionContainer>
}

export default CardSectionContainer
