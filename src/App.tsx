import React from 'react'
import { Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from './store/configStore'
import { getUser } from './store/selectors/userSelector'
import { Stepper } from './components/Stepper'
import { getActiveStep } from './store/selectors/stepperSelector'
import { setActiveStep } from './store/reducers/stepperReducer'

export const App = () => {
  const user = useAppSelector(getUser)
  const activeStep = useAppSelector(getActiveStep)
  const dispatch = useAppDispatch()

  const handleSetUser = () => {
    dispatch(setActiveStep({ activeStep: activeStep + 1 }))
  }

  console.log(user)

  return (
    <div className="App">
      <Stepper steps={['Step 1', 'Step 2', 'Step 3']} activeStep={activeStep} />
      <Button variant="contained" onClick={handleSetUser}>
        Ответить
      </Button>
    </div>
  )
}
