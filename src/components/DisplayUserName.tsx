import { Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../store/configStore'
import { getUser } from '../store/selectors/userSelector'

export const DisplayUserName = () => {
  const user = useAppSelector(getUser)

  return (
    <Typography variant="h5">
      {user.surname} {user.name}
    </Typography>
  )
}
