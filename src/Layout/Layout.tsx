import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout():JSX.Element {
  return (
    <div>
      <NavBar />
     <Outlet />
    </div>
  )
}
