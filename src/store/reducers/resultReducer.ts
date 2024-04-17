import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ResultType = {
  question: string
  answer: string | string[]
}

export const initialResultState: ResultType[] = []

export const userReducer = createSlice({
  name: 'result',
  initialState: initialResultState,
  reducers: {
    setResult(state: ResultType[], action: PayloadAction<ResultType>) {
      state.push(action.payload)
    },
  },
})

export const { setResult } = userReducer.actions
