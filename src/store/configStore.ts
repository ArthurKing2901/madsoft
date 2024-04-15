import {
  combineReducers,
  configureStore,
  PayloadAction,
} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { initialUserState, userReducer, UserType } from './reducers/userReducer'

export type RootStateType = { user: UserType }

const rootInitialState: RootStateType = {
  user: { ...initialUserState },
}

const rootReducer = combineReducers({
  user: userReducer.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: rootInitialState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
