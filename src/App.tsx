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

export const App = () => {
  const user = useAppSelector(getUser)
  const activeStep = useAppSelector(getActiveStep)
  const dispatch = useAppDispatch()
  const methods = useForm()

  const { handleSubmit } = methods
  const currentQuestion = questions[activeStep]

  const handleSetUser = () => {
    dispatch(setActiveStep({ activeStep: activeStep + 1 }))
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
