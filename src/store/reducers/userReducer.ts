import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserType = {
  name: string
  surname: string
  email: string
}

export const initialUserState: UserType = {
  name: '',
  surname: '',
  email: '',
}

export const userReducer = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state: UserType, action: PayloadAction<UserType>) {
      state.name = action.payload.name
      state.surname = action.payload.surname
      state.email = action.payload.email
    },
  },
})

export const { setUser } = userReducer.actions
