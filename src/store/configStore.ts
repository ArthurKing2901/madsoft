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
import {
  initialTimerState,
  timerReducer,
  TimerType,
} from './reducers/timerReducer'

export type RootStateType = {
  isTimeOver: TimerType
  result: ResultType[]
  stepper: StepperType
  user: UserType
}

const rootInitialState: RootStateType = {
  isTimeOver: initialTimerState,
  result: [...initialResultState],
  stepper: { ...initialStepperState },
  user: { ...initialUserState },
}

const rootReducer = combineReducers({
  isTimeOver: timerReducer.reducer,
  result: resultReducer.reducer,
  stepper: stepperReducer.reducer,
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
