import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Template from '../templates/ClientTemplate'
import Input from '../atoms/Input'
import Select from '../atoms/Select'
import Button from '../atoms/Button'
import Textarea from '../atoms/TextArea'
import styled from 'styled-components'
import ToggleForm from '../atoms/ToggleForm'
import { getCategories } from '../../stores/actions/createPage'

const CreateProjectContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  text-align: center;
  font-weight: bold;
`

const SectionStatsContainer = styled.div`
  display: grid;

  @media ${props => props.mediumScreen} {
    grid-gap: 18em;
    grid-template-columns: repeat(3, 30em);
  }
`
const CategoryContainer = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  display: grid;
  grid-gap: 18em;
  grid-template-columns: repeat(2, 3em);
`
const templateForm = {
  title: '',
  description: '',
  nbIssues: 0,
  nbReleases: 0,
  isPrivate: false,
  license: '',
  lastRelease: '',
  nbContributors: null,
  categoryId: null
}
const CreateProject = () => {
  const categories = useSelector(state => state.createPage.categories)
  const themeState = useSelector(state => state.global.theme)
  const [form, setForm] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [categories, dispatch])

  return (
    <Template>
      <CreateProjectContainer>
        <Title>Création d'un projet</Title>
        <Input
          inputColor={themeState.colors.btnFontPrimary}
          type='text'
          labelName='Title'
        />
        <Textarea
          inputColor={themeState.colors.btnFontPrimary}
          name='author-surnname'
          id='description'
          inputName='Description'
        ></Textarea>
        <Input
          inputColor={themeState.colors.btnFontPrimary}
          type='date'
          labelName='Last Release'
        />
        <SectionStatsContainer mediumScreen={themeState.sizes.tablet}>
          <Input
            inputColor={themeState.colors.btnFontPrimary}
            type='number'
            min='0'
            value='0'
            labelName={`Nombre d'issue remonté`}
          />
          <Input
            inputColor={themeState.colors.btnFontPrimary}
            type='number'
            min='0'
            value='0'
            labelName={`Nombre de contributeurs`}
          />
          <Input
            inputColor={themeState.colors.btnFontPrimary}
            type='number'
            min='0'
            value='0'
            labelName={`Nombre de release`}
          />
        </SectionStatsContainer>
        <CategoryContainer>
          <ToggleForm
            nameOff='Off'
            nameOn='On'
            inputName='checkbox'
            color='green'
          />

          <Select
            name='category'
            color={themeState.colors.btnFontPrimary}
            required
          >
            <option value='' disabled selected></option>
            {categories.map((category, index) => {
              return (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              )
            })}
          </Select>
        </CategoryContainer>
        <Button
          name='Créer votre projet'
          borderColor='blue'
          textHoverColor='blue'
          fillingColor='blue'
          textColor='white'
          IsInvert={false}
          onClick={() => console.log('test')}
        ></Button>
      </CreateProjectContainer>
    </Template>
  )
}

export default CreateProject
