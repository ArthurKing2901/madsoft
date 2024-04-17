import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { initialUserState, userReducer, UserType } from './reducers/userReducer'
import {
  initialStepperState,
  stepperReducer,
  StepperType,
} from './reducers/stepperReducer'
import {
  initialResultState,
  resultReducer,
  ResultType,
} from './reducers/resultReducer'

export type RootStateType = {
  user: UserType
  stepper: StepperType
  result: ResultType[]
}

const rootInitialState: RootStateType = {
  user: { ...initialUserState },
  stepper: { ...initialStepperState },
  result: [...initialResultState],
}

const rootReducer = combineReducers({
  user: userReducer.reducer,
  stepper: stepperReducer.reducer,
  result: resultReducer.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: rootInitialState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
