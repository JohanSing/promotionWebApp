import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FaRocket, FaRegCalendarAlt, FaHeart } from 'react-icons/fa'
import CardContainer from '../../atoms/CardContainer'
import CardTitle from '../../atoms/CardTitle'
import IconTextContainer from '../../atoms/CardIconTextContainer'
import CardDescription from '../../atoms/CardDescription'
import SectionContainer from '../../atoms/CardSectionContainer'
import CardType from '../../atoms/CartType'
import CardRead from '../../atoms/CardRead'

const CardCategory = styled(CardTitle)`
  font-size: 0.75em;
`
const IsNullOrEmpty = value => {
  return !value || value === undefined || value === '' || value.length === 0
}

const Card = ({
  color,
  title,
  category,
  description,
  date,
  type,
  link,
  linkName,
  numberLike,
  ...props
}) => {
  var LikeComponent = null,
    DateComponent = null
  if (!IsNullOrEmpty(numberLike)) {
    LikeComponent = (
      <IconTextContainer color={color}>
        <FaHeart />
        {numberLike}
      </IconTextContainer>
    )
  }
  if (!IsNullOrEmpty(date)) {
    DateComponent = (
      <IconTextContainer color={color}>
        <FaRegCalendarAlt />
        {date}
      </IconTextContainer>
    )
  }
  return (
    <CardContainer color={color}>
      <CardTitle>{title}</CardTitle>
      <CardCategory>
        <IconTextContainer color={color}>
          <FaRocket />
          {category}
        </IconTextContainer>
      </CardCategory>
      <CardDescription text={description} />
      {DateComponent}
      <SectionContainer>
        <CardType text={type} />
        <CardRead link={link} text={linkName} />
      </SectionContainer>
      {LikeComponent}
    </CardContainer>
  )
}

Card.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string,
  linkName: PropTypes.string,
  description: PropTypes.string,
  numberLike: PropTypes.string
}

export default Card
