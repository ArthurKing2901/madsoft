import { useEffect, useMemo, useState } from 'react'

const getUnixTimeInSeconds = (seconds: number) => {
  const time = Date.now()

  return time + seconds * 1000
}

const secondsConvert = (time: number) => {
  const seconds = time % 60
  const minutes = Math.floor(time / 60)

  return {
    minutes: minutes < 0 ? 0 : minutes,
    seconds: seconds < 0 ? 0 : seconds,
  }
}

const toPad = (value: number) => {
  return value.toString().padStart(2, '0')
}

export const Timer = () => {
  const [stopTimer, setStopTimer] = useState<number>(0)
  const [isActiveTimer, setIsActiveTimer] = useState(false)
  const [tick, setTick] = useState(0)

  const { seconds, minutes } = useMemo(() => {
    const s = ((stopTimer - Date.now()) / 1000).toFixed(0)
    console.log(s)
    return secondsConvert(+s)
  }, [tick, stopTimer])

  useEffect(() => {
    let interval: number | undefined

    if (isActiveTimer) {
      //@ts-ignore
      interval = setInterval(() => {
        const currentTime = Date.now()
        if (currentTime >= stopTimer) {
          console.log('Timer stopped!')
          setIsActiveTimer(false)
        }

        setTick((prev) => prev + 1)
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActiveTimer])

  useEffect(() => {
    setStopTimer(getUnixTimeInSeconds(70))
    setIsActiveTimer((prev) => !prev)
  }, [])

  return (
    <>
      Осталось времени:
      {toPad(minutes)} : {toPad(seconds)}
    </>
  )
}
