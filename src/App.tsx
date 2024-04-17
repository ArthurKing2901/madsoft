import React from 'react'
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from './store/configStore'
import { getUser } from './store/selectors/userSelector'
import { Stepper } from './components/Stepper'
import { getActiveStep } from './store/selectors/stepperSelector'
import { setActiveStep } from './store/reducers/stepperReducer'
import { questions } from './mokData'
import { FormProvider, useForm } from 'react-hook-form'
import { QuestionCard } from './components/QuestionCard'

export const App = () => {
  const activeStep = useAppSelector(getActiveStep)
  const dispatch = useAppDispatch()
  const methods = useForm()
  const { handleSubmit } = methods

  const handleSetUser = (formData: any) => {
    if (activeStep < questions.length - 1) {
      dispatch(setActiveStep({ activeStep: activeStep + 1 }))
    }
    console.log(formData)
  }

  return (
    <Container fixed>
      <FormProvider {...methods}>
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
    </Container>
  )
}
