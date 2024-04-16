import { RootStateType } from '../configStore'
import { createSelector } from '@reduxjs/toolkit'

export const getStepper = (state: RootStateType) => state.stepper

export const getActiveStep = createSelector(
  [getStepper],
  (stepper) => stepper.activeStep,
)
