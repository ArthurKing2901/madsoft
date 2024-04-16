import React from 'react'
import { StepLabel, Step, Stepper as MuiStepper } from '@mui/material'

type StepperProps = {
  steps: string[]
  activeStep: number
}

export const Stepper = ({ steps, activeStep }: StepperProps) => {
  return (
    <MuiStepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel></StepLabel>
        </Step>
      ))}
    </MuiStepper>
  )
}
