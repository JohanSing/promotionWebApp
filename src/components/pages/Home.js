import React, { useEffect } from 'react'
// import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Navbar from '../molecules/FullNavbar'
import { retrieveAuth } from '../../stores/actions/auth'

const Home = () => {
  const dispatch = useDispatch()
  const themeState = useSelector(state => state.global.theme)
  const authState = useSelector(state => state.auth.authUser)

  useEffect(() => {
    dispatch(retrieveAuth())
  }, [authState])

  return (
    <div>
      <Navbar theme={themeState} authUser={authState}></Navbar>
    </div>
  )
}

export default Home
