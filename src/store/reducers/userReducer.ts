import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserType = {
  name: string
  age: number
}

export const initialUserState: UserType = {
  name: 'John',
  age: 30,
}

export const userReducer = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state: UserType, action: PayloadAction<UserType>) {
      state.name = action.payload.name
      state.age = action.payload.age
    },
  },
})

export const { setUser } = userReducer.actions
