import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { initialUserState, userReducer, UserType } from './reducers/userReducer'
import {
  initialStepperState,
  stepperReducer,
  StepperType,
} from './reducers/stepperReducer'

export type RootStateType = { user: UserType; stepper: StepperType }

const rootInitialState: RootStateType = {
  user: { ...initialUserState },
  stepper: { ...initialStepperState },
}

const rootReducer = combineReducers({
  user: userReducer.reducer,
  stepper: stepperReducer.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: rootInitialState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
