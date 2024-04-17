import React from 'react'
import {
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import { useAppSelector } from '../store/configStore'
import { getActiveStep } from '../store/selectors/stepperSelector'
import { questions } from '../mokData'
import { useFormContext } from 'react-hook-form'

export const QuestionCard = () => {
  const { register } = useFormContext()
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
                    {...register('radio')}
                    value={answer}
                    control={<Radio />}
                    label={answer}
                  />
                </RadioGroup>
              )}

              {questionType === 'CHECKBOX' && (
                <FormControlLabel
                  {...register('checkbox')}
                  value={answer}
                  control={<Checkbox name={'checkbox'} />}
                  label={answer}
                />
              )}

              {questionType === 'TEXT' && (
                <FormControlLabel
                  {...register('text')}
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
