import { useEffect, useRef, useState } from 'react'
import Button from '../Button'

export type Status = 'ready' | 'start' | 'stop'

interface Props {
  status?: Status
}

export default function ({ status = 'ready' }: Props) {
  // 计时器
  const [count, setCount] = useState(0)
  const timer = useRef<NodeJS.Timeout>()
  useEffect(() => {
    if (status === 'ready') {
      setCount(0)
    }
    if (status === 'start') {
      timer.current = setInterval(() => {
        setCount(preCount => preCount + 1)
      }, 1000)
    }
    return () => clearInterval(timer.current)
  }, [status])
  if (status === 'ready') {
    return <Button color='#909399'>{`⏳ ${0}s`}</Button>
  }
  if (status === 'start') {
    return <Button color='#909399'>{`⏳ ${count}s`}</Button>
  }
  clearInterval(timer.current)
  return (
    <Button color='#67c23a'>{`🚩 ${count}s`}</Button>
  )
}
