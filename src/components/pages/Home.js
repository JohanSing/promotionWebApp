import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Navbar from '../molecules/FullNavbar'

const Home = () => {
  const theme = useContext(ThemeContext)

  return <Navbar></Navbar>
}

export default Home
