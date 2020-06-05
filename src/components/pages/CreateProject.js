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
import { useTranslation } from 'react-i18next'

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
    grid-template-columns: repeat(3, 15em);
  }
`
const CategoryContainer = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
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
  const [form, setForm] = useState(templateForm)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  const registerProject = () => {
    console.log(form)
  }
  return (
    <Template>
      <CreateProjectContainer>
        <Title>Création d'un projet</Title>
        <Input
          inputColor={themeState.colors.btnBorderPrimary}
          type='text'
          labelName={t('createPage.form.title')}
          onChange={event => setForm({ ...form, title: event.target.value })}
        />
        <Textarea
          inputColor={themeState.colors.btnBorderPrimary}
          name='author-surnname'
          id='description'
          inputName={t('createPage.form.description')}
          onChange={event =>
            setForm({ ...form, description: event.target.value })
          }
        ></Textarea>
        <Input
          inputColor={themeState.colors.btnBorderPrimary}
          type='text'
          labelName={t('createPage.form.licence')}
          onChange={event => setForm({ ...form, license: event.target.value })}
        />
        <Input
          inputColor={themeState.colors.btnBorderPrimary}
          type='date'
          labelName={t('createPage.form.last_release')}
          onChange={event =>
            setForm({ ...form, lastRelease: event.target.value })
          }
        />
        <SectionStatsContainer mediumScreen={themeState.sizes.tablet}>
          <Input
            inputColor={themeState.colors.btnBorderPrimary}
            type='number'
            min='0'
            labelName={t('createPage.form.nbIssue')}
            onChange={event =>
              setForm({ ...form, nbIssues: event.target.value })
            }
          />
          <Input
            inputColor={themeState.colors.btnBorderPrimary}
            type='number'
            min='0'
            labelName={t('createPage.form.nbContributor')}
            onChange={event =>
              setForm({ ...form, nbContributors: event.target.value })
            }
          />
          <Input
            inputColor={themeState.colors.btnBorderPrimary}
            type='number'
            min='0'
            labelName={t('createPage.form.nbRelease')}
            onChange={event =>
              setForm({ ...form, nbReleases: event.target.value })
            }
          />
        </SectionStatsContainer>
        <CategoryContainer>
          <Select
            name={t('createPage.form.category')}
            color={themeState.colors.btnBorderPrimary}
            required
            onClick={event => {
              let select = event.target
              console.log(select)
              setForm({
                ...form,
                categoryId: select[select.selectedIndex].value
              })
            }}
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
          <ToggleForm
            nameOff={t('createPage.form.toggleOff')}
            nameOn={t('createPage.form.toggleOn')}
            inputName='checkbox'
            color={themeState.colors.btnBorderPrimary}
            onClick={event => {
              console.log(event.target.checked)
              setForm({ ...form, isPrivate: event.target.checked })
            }}
          />
        </CategoryContainer>
        <Button
          name='Créer votre projet'
          borderColor={themeState.colors.btnBorderPrimary}
          textHoverColor={themeState.colors.btnBorderPrimary}
          fillingColor={themeState.colors.btnBorderPrimary}
          textColor='white'
          IsInvert={themeState.colors.btnBorderPrimary}
          onClick={registerProject}
        ></Button>
      </CreateProjectContainer>
    </Template>
  )
}

export default CreateProject
