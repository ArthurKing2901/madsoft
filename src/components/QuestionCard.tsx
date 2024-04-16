import React from 'react'
import {
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import { useAppSelector } from '../store/configStore'
import { getActiveStep } from '../store/selectors/stepperSelector'
import { questions } from '../mokData'

export const QuestionCard = () => {
  const activeStep = useAppSelector(getActiveStep)
  const currentQuestion = questions[activeStep]
  const questionType = currentQuestion.type

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {currentQuestion.question}
        </Typography>

        <FormControl>
          {currentQuestion.answers.map((answer) => (
            <div key={answer}>
              {questionType === 'RADIO' && (
                <RadioGroup name="radio-buttons-group">
                  <FormControlLabel
                    value={answer}
                    control={<Radio />}
                    label={answer}
                  />
                </RadioGroup>
              )}

              {questionType === 'CHECKBOX' && (
                <FormControlLabel
                  control={<Checkbox name={'checkbox'} />}
                  label={answer}
                />
              )}

              {questionType === 'TEXT' && (
                <FormControlLabel
                  control={<TextField variant="outlined" />}
                  label={answer}
                />
              )}
            </div>
          ))}
        </FormControl>
      </CardContent>
    </Card>
  )
}
