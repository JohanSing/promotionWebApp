import React from 'react'
import Navbar from '../molecules/FullNavbar'
import { useSelector } from 'react-redux'
const ClientTemplate = props => {
  const themeState = useSelector(state => state.global.theme)

  return (
    <div>
      <Navbar theme={themeState}></Navbar>
      {props.children}
    </div>
  )
}

export default ClientTemplate
