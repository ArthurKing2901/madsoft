import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type StepperType = {
  activeStep: number
}

export const initialStepperState: StepperType = {
  activeStep: 0,
}

export const stepperReducer = createSlice({
  name: 'stepper',
  initialState: initialStepperState,
  reducers: {
    setActiveStep(state: StepperType, action: PayloadAction<StepperType>) {
      state.activeStep = action.payload.activeStep
    },
  },
})

export const { setActiveStep } = stepperReducer.actions
