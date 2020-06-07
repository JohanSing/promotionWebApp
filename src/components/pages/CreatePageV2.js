import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Template from '../templates/ClientTemplate'
import Input from '../atoms/Input'
import Select from '../atoms/Select'
import Button from '../atoms/Button'
import Textarea from '../atoms/TextArea'
import styled from 'styled-components'
import ToggleForm from '../atoms/ToggleForm'
import { getCategories, createProject } from '../../stores/actions/createPage'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

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

const templateForm = {
  title: '',
  description: '',
  nbIssues: 0,
  nbReleases: 0,
  isPrivate: false,
  license: '',
  lastRelease: '',
  nbContributors: 0,
  categoryId: null
}
const CreateProjectContainer = styled.div`
  padding: 12em;
  display: flex;
  flex-direction: column;
`
const CreatePageV2 = () => {
  const access_token = JSON.parse(localStorage.getItem('security_access'))
    .access_token
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const categories = useSelector(state => state.createPage.categories)
  const themeState = useSelector(state => state.global.theme)
  const [errorMessage, setErrorMessage] = useState('')
  const [form, setForm] = useState(templateForm)
  const [listProjects, setListProjects] = useState([])
  const [projectOwner, setProjectOwner] = useState('')

  const getProjectInformation = event => {
    let projectId = event.target.options[event.target.selectedIndex].value
    axios
      .get(`https://api.github.com/repos/${projectOwner}/${projectId}`, {
        headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(response => {
        console.log(response.data)
        setForm({
          ...form,
          description:
            response.data.description === null ? '' : response.data.description
        })
      })
  }
  useEffect(() => {
    dispatch(getCategories())
    axios
      .get('https://api.github.com/user/repos?type=owner', {
        headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(response => {
        setListProjects(
          response.data.map(project => {
            return {
              id: project.name,
              name: project.name
            }
          })
        )
        setProjectOwner(response.data[0].owner.login)
      })
  }, [dispatch])
  return (
    <CreateProjectContainer>
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
      <Textarea
        inputColor={themeState.colors.btnBorderPrimary}
        name='author-surnname'
        id='description'
        value={form.description}
        inputName={t('createPage.form.description')}
        onChange={event =>
          setForm({ ...form, description: event.target.value })
        }
      ></Textarea>
      <ErrorMessageSpan>{errorMessage}</ErrorMessageSpan>
      <CategoryContainer>
        <Select
          name={t('createPage.form.category')}
          color={themeState.colors.btnBorderPrimary}
          required
          action={event => {
            let select = event.target
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
          action={event => {
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
        IsInvert={true}
        onClick={event => console.log(event.target)}
      ></Button>
    </CreateProjectContainer>
  )
}

export default CreatePageV2
