import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TimerType = {
  isTimeOver: boolean
}

export const initialTimerState: TimerType = {
  isTimeOver: false,
}

export const timerReducer = createSlice({
  name: 'timer',
  initialState: initialTimerState,
  reducers: {
    setIsTimeOver(state: TimerType, action: PayloadAction<TimerType>) {
      state.isTimeOver = action.payload.isTimeOver
    },
  },
})

export const { setIsTimeOver } = timerReducer.actions
