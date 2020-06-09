import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import moment from 'moment'

import { addNewPost } from '../../stores/actions/post'

import projects from '../../datas/projects.json'

import Template from '../templates/ClientTemplate'
import Card from '../molecules/Card'
import InputForm from '../atoms/Input'
import TextArea from '../atoms/TextArea'
import Select from '../atoms/Select'
import Button from '../atoms/Button'

const POST_TYPES = ['news', 'changelog']

const CreatePost = () => {
  const history = useHistory()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const themeState = useSelector(state => state.global.theme)
  const [formState, setFormState] = useState({
    type: 'news',
    title: 'Default title',
    description:
      'Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet',
    createdAt: new Date().toISOString(),
    author: 1,
    projectId: null
  })
  const [errorMessage, setErrorMessage] = useState('')

  const sendPost = e => {
    e.preventDefault()

    let emptyFieldFound = false
    Object.keys(formState).forEach(value => {
      if (
        formState[value] === null ||
        formState[value] === undefined ||
        formState[value] === ''
      ) {
        emptyFieldFound = true
      }
    })
    if (emptyFieldFound) {
      setErrorMessage(t('post.errorMessage'))
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
      return
    }
    dispatch(addNewPost(formState))
    history.push('/')
  }

  return (
    <Template>
      <TitlePage color={themeState.colors.fontMain}>
        {t('post.titlePage')}
      </TitlePage>
      <WrapperCreatePost mediumScreen={themeState.sizes.laptop}>
        <WrapperSection color={themeState.colors.fontMain}>
          <h2>{t('post.titlePreview')}</h2>
          <Card
            color={themeState.colors.btnBackgroundPrimaryHover}
            fontColor={themeState.colors.fontMain}
            title={formState.title}
            description={formState.description}
            date={moment(new Date().toISOString()).format(
              'YYYY-MM-DD HH:mm:ss'
            )}
            type={formState.type}
            linkName={t('cardLink')}
          />
        </WrapperSection>
        <WrapperSection color={themeState.colors.fontMain}>
          <h2>{t('post.titleForm')}</h2>
          <FormCreatePost onSubmit={sendPost}>
            <InputForm
              labelName={t('title')}
              type='text'
              id='title'
              inputColor={themeState.colors.btnBorderPrimary}
              onChange={event =>
                setFormState({ ...formState, title: event.target.value })
              }
            />
            <TextArea
              inputColor={themeState.colors.btnBorderPrimary}
              id='description'
              inputName='Description'
              onChange={event =>
                setFormState({ ...formState, description: event.target.value })
              }
            />
            <Select
              name='Type'
              color={themeState.colors.btnBorderPrimary}
              required
              action={event => {
                let select = event.target
                setFormState({
                  ...formState,
                  type: select[select.selectedIndex].value
                })
              }}
            >
              <option value='' disabled selected></option>
              {POST_TYPES.map((type, index) => {
                return (
                  <option key={index} value={type}>
                    {t(type)}
                  </option>
                )
              })}
            </Select>
            <Select
              name='Project'
              color={themeState.colors.btnBorderPrimary}
              required
              action={event => {
                let select = event.target
                setFormState({
                  ...formState,
                  projectId: select[select.selectedIndex].value
                })
              }}
            >
              <option value='' disabled selected></option>
              {projects.map((project, index) => {
                return (
                  <option key={index} value={project.id}>
                    {t(project.title)}
                  </option>
                )
              })}
            </Select>
            <ErrorMessageSpan>{errorMessage}</ErrorMessageSpan>
            <Button
              name={t('post.submit')}
              borderColor={themeState.colors.btnBorderPrimary}
              textHoverColor={themeState.colors.btnBorderPrimary}
              fillingColor={themeState.colors.btnBorderPrimary}
              backgroundColor={themeState.colors.backgroundMain}
              textColor='white'
              IsInvert={true}
              type='submit'
            ></Button>
          </FormCreatePost>
        </WrapperSection>
      </WrapperCreatePost>
    </Template>
  )
}

const TitlePage = styled.h1`
  margin: 0 0.5em;
  color: ${props => props.color};
`

const WrapperCreatePost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1em;
  @media ${props => props.mediumScreen} {
    flex-direction: row;
  }
`

const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin-bottom: 30px;
  width: 100%;

  h2 {
    color: ${props => props.color};
  }
`

const FormCreatePost = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

const ErrorMessageSpan = styled.span`
  margin: 10px 0;
  color: red;
  text-align: left;
`

export default CreatePost
