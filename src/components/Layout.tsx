import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import React from 'react'

export const Layout = () => {
  return (
    <Container fixed>
      <Outlet />
    </Container>
  )
}
