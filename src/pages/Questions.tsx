import { Button, Grid, Typography } from '@mui/material'
import { Stepper } from '../components/Stepper'
import { QuestionCard } from '../components/QuestionCard'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/configStore'
import { getActiveStep } from '../store/selectors/stepperSelector'
import { questions } from '../mokData'
import { setActiveStep } from '../store/reducers/stepperReducer'
import { getUser } from '../store/selectors/userSelector'
import { setResult } from '../store/reducers/resultReducer'
import { useNavigate } from 'react-router-dom'
import { DisplayUserName } from '../components/DisplayUserName'

type FormDataType = {
  answer: string | string[]
}

const defaultValues: FormDataType = {
  answer: '',
}

export const Questions = () => {
  const activeStep = useAppSelector(getActiveStep)
  const dispatch = useAppDispatch()
  const methods = useForm<FormDataType>({ defaultValues })
  const { handleSubmit } = methods
  const currentQuestion = questions[activeStep]

  const navigate = useNavigate()

  const handleSetUser = (formData: FormDataType) => {
    if (activeStep < questions.length - 1) {
      dispatch(setActiveStep({ activeStep: activeStep + 1 }))
    }

    dispatch(
      setResult({
        question: currentQuestion.question,
        answer: formData.answer,
      }),
    )

    if (activeStep === questions.length - 1) {
      navigate('/result')
    }
  }

  return (
    <FormProvider {...methods}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <DisplayUserName />
        </Grid>
      </Grid>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Stepper
            steps={['Step 1', 'Step 2', 'Step 3']}
            activeStep={activeStep}
          />
        </Grid>
        <Grid item>
          <QuestionCard />
        </Grid>

        <Grid item>
          <Button variant="contained" onClick={handleSubmit(handleSetUser)}>
            Ответить
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  )
}
