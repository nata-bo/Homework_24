import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar():JSX.Element {
  return (
    <nav>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="bread">Bread</NavLink>
      
    </nav>
  )
}
