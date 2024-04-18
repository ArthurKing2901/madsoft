import React from 'react'
import { useAppSelector } from '../store/configStore'
import { getResult } from '../store/selectors/resultSelector'
import { Alert, Box, Typography } from '@mui/material'
import { DisplayUserName } from '../components/DisplayUserName'
import { getIsTimeOver } from '../store/selectors/timerSelector'

export const Result = () => {
  const result = useAppSelector(getResult)
  const { isTimeOver } = useAppSelector(getIsTimeOver)

  return (
    <Box>
      {isTimeOver && (
        <Alert severity="error">
          Время вышло! Вы не успели ответить на все вопросы.
        </Alert>
      )}

      <DisplayUserName />

      {result.map(({ question, answer }) => {
        const displayAnswer = Array.isArray(answer) ? answer.join(', ') : answer

        return (
          <Typography key={question} variant="h5">
            {question}: {displayAnswer}
          </Typography>
        )
      })}
    </Box>
  )
}
