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
import { Controller, useFormContext } from 'react-hook-form'

export const QuestionCard = () => {
  const { register, control } = useFormContext()
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
                <Controller
                  name="answer"
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <FormControlLabel
                        value={answer}
                        control={<Radio />}
                        label={answer}
                      />
                    </RadioGroup>
                  )}
                  control={control}
                />
              )}

              {questionType === 'CHECKBOX' && (
                <FormControlLabel
                  value={answer}
                  control={<Checkbox />}
                  label={answer}
                  {...register('answer')}
                />
              )}

              {questionType === 'TEXT' && (
                <FormControlLabel
                  control={<TextField variant="outlined" />}
                  label={answer}
                  {...register('answer')}
                />
              )}
            </div>
          ))}
        </FormControl>
      </CardContent>
    </Card>
  )
}
