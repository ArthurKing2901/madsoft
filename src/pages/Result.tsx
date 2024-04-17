import { useAppSelector } from '../store/configStore'
import { getResult } from '../store/selectors/resultSelector'
import { Box, Typography } from '@mui/material'
import { DisplayUserName } from '../components/DisplayUserName'
import React from 'react'

export const Result = () => {
  const result = useAppSelector(getResult)
  console.log(result)

  return (
    <Box>
      <DisplayUserName />
      {result.map(({ question, answer }) => (
        <Typography key={question} variant="h5">
          {question}: {answer}
        </Typography>
      ))}
    </Box>
  )
}
