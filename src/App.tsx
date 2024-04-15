import React from 'react'
import { Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from './store/configStore'
import { getUser } from './store/selectors/userSelector'
import { setUser } from './store/reducers/userReducer'

export const App = () => {
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()

  const handleSetUser = () => {
    dispatch(setUser({ name: 'Luke', age: 33 }))
  }

  console.log(user)

  return (
    <div className="App">
      <Button variant="contained" onClick={handleSetUser}>
        Hello world
      </Button>
    </div>
  )
}
