import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { useAppSelector } from '../store/configStore'
import { getActiveStep } from '../store/selectors/stepperSelector'
import { questions } from '../mokData'

export const QuestionCard = () => {
  const activeStep = useAppSelector(getActiveStep)
  const currentQuestion = questions[activeStep]

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {currentQuestion.question}
        </Typography>

        {currentQuestion.answers.map((answer) => (
          <Typography
            key={answer}
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            {answer}
          </Typography>
        ))}
      </CardContent>
    </Card>
  )
}
