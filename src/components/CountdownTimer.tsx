// import { useEffect, useMemo, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
//
// const getUnixTimeInSeconds = (seconds: number) => {
//   const time = Date.now()
//
//   return time + seconds * 1000
// }
//
// const secondsConvert = (time: number) => {
//   const seconds = time % 60
//   const minutes = Math.floor(time / 60)
//
//   return {
//     minutes: minutes < 0 ? 0 : minutes,
//     seconds: seconds < 0 ? 0 : seconds,
//   }
// }
//
// const toPad = (value: number) => {
//   return value.toString().padStart(2, '0')
// }
//
// type TimerProps = { timerDuration: number }
//
// export const Timer = ({ timerDuration }: TimerProps) => {
//   const [stopTimer, setStopTimer] = useState<number>(0)
//   const [isActiveTimer, setIsActiveTimer] = useState(false)
//   const [tick, setTick] = useState(0)
//   const navigate = useNavigate()
//
//   const { seconds, minutes } = useMemo(() => {
//     const s = ((stopTimer - Date.now()) / 1000).toFixed(0)
//     return secondsConvert(+s)
//   }, [tick, stopTimer])
//
//   useEffect(() => {
//     let interval: number | undefined
//
//     if (isActiveTimer) {
//       //@ts-ignore
//       interval = setInterval(() => {
//         const currentTime = Date.now()
//         if (currentTime >= stopTimer) {
//           setIsActiveTimer(false)
//           navigate('/result')
//         }
//
//         setTick((prev) => prev + 1)
//       }, 1000)
//     }
//     return () => {
//       clearInterval(interval)
//     }
//   }, [isActiveTimer, navigate])
//
//   useEffect(() => {
//     setStopTimer(getUnixTimeInSeconds(timerDuration))
//     setIsActiveTimer(true)
//   }, [timerDuration])
//
//   return (
//     <>
//       Осталось времени:
//       {toPad(minutes)} : {toPad(seconds)}
//     </>
//   )
// }

import Countdown, { zeroPad } from 'react-countdown'
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
import { useAppDispatch } from '../store/configStore'
import { setIsTimeOver } from '../store/reducers/timerReducer'
import { timerDuration } from '../mokData'

type TimerRenderer = { hours: number; minutes: number; seconds: number }

export const CountdownTimer = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const renderer = ({ hours, minutes, seconds }: TimerRenderer) => {
    return (
      <Grid item>
        Осталось времени: {hours ? `${zeroPad(hours)}:` : ''}
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </Grid>
    )
  }

  const leftTime = useMemo(() => {
    return +Date.now() + timerDuration * 1000
  }, [timerDuration])

  const handleIsTimeOver = () => {
    dispatch(setIsTimeOver({ isTimeOver: true }))
    navigate('/result')
  }

  return (
    <Countdown
      date={leftTime}
      onComplete={handleIsTimeOver}
      renderer={renderer}
    />
  )
}
