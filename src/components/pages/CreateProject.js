import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Template from '../templates/ClientTemplate'
import Input from '../atoms/Input'
import Select from '../atoms/Select'
import Button from '../atoms/Button'
import Textarea from '../atoms/TextArea'
import styled from 'styled-components'
import ToggleForm from '../atoms/ToggleForm'
import {
  getCategories,
  createProject,
  getGithubRepositories,
  getGithubRepository
} from '../../stores/actions/createPage'
import { useTranslation } from 'react-i18next'

const CreateProjectContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  padding-top: 3em;

  media ${props => props.mediumScreen} {
    padding-top: 1em;
  }
`

const Title = styled.h3`
  text-align: center;
  font-weight: bold;
`

const SectionStatsContainer = styled.div`
  display: grid;

  @media ${props => props.mediumScreen} {
    grid-gap: 3em;
    grid-template-columns: repeat(3, 17em);
  }
`
const CategoryContainer = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
`
const ErrorMessageSpan = styled.span`
  color: red;
  text-align: center;
`
const SuccessMessageSpan = styled.span`
  color: green;
  text-align: center;
`
const CreateProject = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const themeState = useSelector(state => state.global.theme)
  const categories = useSelector(state => state.createPage.categories)
  const listProjects = useSelector(state => state.createPage.listProjects)
  const projectsOwner = useSelector(state => state.createPage.projectsOwner)
  const form = useSelector(state => state.createPage.createPageForm)
  const [finalForm, setFinalForm] = useState(form)
  const projectRegistered = useSelector(state => state.createPage.IsRegistered)
  const [errorMessage, setErrorMessage] = useState('')
  let successSpan = null
  const getProjectInformation = event => {
    let projectName = event.target.options[event.target.selectedIndex].value
    dispatch(getGithubRepository(projectsOwner, projectName))
  }

  useEffect(() => {
    dispatch(getGithubRepositories())
    dispatch(getCategories())
  }, [dispatch, finalForm])

  if (projectRegistered) {
    setTimeout(() => console.log('je passe'), 3000)
    successSpan = (
      <SuccessMessageSpan>{t('successRegistered')}</SuccessMessageSpan>
    )
  }
  const registerProject = () => {
    let emptyFieldFound = false
    Object.keys(form).forEach(value => {
      if (
        form[value] === null ||
        form[value] === undefined ||
        form[value] === ''
      ) {
        emptyFieldFound = true
      }
    })
    if (emptyFieldFound) {
      setErrorMessage(t('createPage.form.errorMessage'))
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
    }
    dispatch(createProject(form))
  }

  return (
    <Template>
      <CreateProjectContainer mediumScreen={themeState.sizes.tablet}>
        <Title>Création d'un projet</Title>
        <Select
          name='Liste des projets'
          color={themeState.colors.btnBorderPrimary}
          required
          action={getProjectInformation}
        >
          <option value='' disabled selected></option>
          {listProjects.map((project, index) => {
            return (
              <option key={index} value={project.id}>
                {project.name}
              </option>
            )
          })}
        </Select>
        <Input
          inputColor={themeState.colors.btnBorderPrimary}
          type='text'
          labelName={t('createPage.form.title')}
          value={form.title}
          onChange={event =>
            setFinalForm({ ...form, title: event.target.value })
          }
        />
        <Textarea
          inputColor={themeState.colors.btnBorderPrimary}
          name='author-surnname'
          id='description'
          value={form.description}
          inputName={t('createPage.form.description')}
        ></Textarea>
        <Input
          inputColor={themeState.colors.btnBorderPrimary}
          type='text'
          labelName={t('createPage.form.licence')}
          onChange={event => {}}
        />
        <Input
          inputColor={themeState.colors.btnBorderPrimary}
          type='date'
          labelName={t('createPage.form.last_release')}
          value={form.lastRelease}
        />
        <SectionStatsContainer mediumScreen={themeState.sizes.tablet}>
          <Input
            inputColor={themeState.colors.btnBorderPrimary}
            type='number'
            min='0'
            labelName={t('createPage.form.nbIssue')}
            value={form.nbIssues}
          />
          <Input
            inputColor={themeState.colors.btnBorderPrimary}
            type='number'
            min='0'
            labelName={t('createPage.form.nbContributor')}
            value={form.nbContributors}
          />
          <Input
            inputColor={themeState.colors.btnBorderPrimary}
            type='number'
            min='0'
            labelName={t('createPage.form.nbRelease')}
            value={form.nbReleases}
          />
        </SectionStatsContainer>
        <CategoryContainer>
          <Select
            name={t('createPage.form.category')}
            color={themeState.colors.btnBorderPrimary}
            required
            action={event => {
              let select = event.target
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
            action={event => {}}
          />
        </CategoryContainer>
        {successSpan}
        <ErrorMessageSpan>{errorMessage}</ErrorMessageSpan>
        <Button
          name='Créer votre projet'
          borderColor={themeState.colors.btnBorderPrimary}
          textHoverColor={themeState.colors.btnBorderPrimary}
          fillingColor={themeState.colors.btnBorderPrimary}
          textColor='white'
          IsInvert={true}
          onClick={registerProject}
        ></Button>
      </CreateProjectContainer>
    </Template>
  )
}

export default CreateProject
