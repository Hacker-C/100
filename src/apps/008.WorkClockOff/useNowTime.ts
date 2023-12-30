import { useEffect, useState } from 'react'

const format = (s: number) => {
  return s < 10 ? `0${s}` : s
}

const getNowTime = () => {
  const date = new Date()
  const hour = format(date.getHours())
  const min = format(date.getMinutes())
  const sec = format(date.getSeconds())
  return `${hour} : ${min} : ${sec}`
}

export default function useNowTime() {
  const [time, setTime] = useState(getNowTime())
  useEffect(() => {
    const timmer = setInterval(() => {
      setTime(getNowTime())
    }, 1000)
    return () => clearInterval(timmer)
  }, [])
  return { time }
}
