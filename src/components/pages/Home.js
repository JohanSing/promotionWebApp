import React from 'react'
// import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Navbar from '../molecules/FullNavbar'

const Home = () => {
  const themeState = useSelector(state => state.global.theme)

  return (
    <div>
      <Navbar theme={themeState}></Navbar>
    </div>
  )
}

export default Home
