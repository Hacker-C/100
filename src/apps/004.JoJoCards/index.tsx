import { useEffect, useState } from 'react'
import CardsContextProvider, { useDispatch, useHeros, useTasks, useTasksDispatchContext } from './context'
import Button from './components/Button'
import type { Status } from './components/CountUp'
import CountUp from './components/CountUp'
import CardsList from './components/CardsList'
import AppWrapper from '@/components/AppWrapper'

export default function JoJoCards() {
  return (
    <CardsContextProvider>
      <JoJoCardsApp />
    </CardsContextProvider>
  )
}

function JoJoCardsApp() {
  const dispatch = useDispatch()!
  const tasks = useTasks()
  const heros = useHeros()
  const tasksDispatch = useTasksDispatchContext()!
  let timer: NodeJS.Timeout
  const [status, setStatus] = useState<Status>('ready')
  // 游戏开始
  useEffect(() => {
    const idx1 = heros.findIndex(hero => hero.isFront)
    const idx2 = [...heros].reverse().findIndex(hero => hero.isFront)
    if (idx1 !== -1 && idx1 + idx2 === heros.length - 1) {
      setStatus('start')
    }
  }, [heros])
  // 游戏通过
  useEffect(() => {
    const finished = !heros.some(hero => hero.isFront === false)
    if (finished) {
      // 计时器状态停止
      setStatus('stop')
    }
  }, [heros])
  // 监听是否点击了同一张图片
  useEffect(() => {
    if (tasks.length === 2 && tasks[0] === tasks[1]) {
      // 点击同一张图片
      dispatch({ type: 'set-front', payload: tasks[0] })
      tasksDispatch({ type: 'reset-tasks' })
    }
  }, [tasks])
  // 监听替身和本体是否匹配
  useEffect(() => {
    if (tasks.length === 2) {
      const [n1, n2] = [...tasks].sort((a, b) => a - b)
      if (n1 === n2) {
        // 点击同一张图片
        dispatch({ type: 'set-front', payload: n1 })
        tasksDispatch({ type: 'reset-tasks' })
        return () => { }
      }
      if (!((n1 & 1) && n1 + 1 === n2)) {
        // 当前点击的替身和本体不匹配
        timer = setTimeout(() => {
          tasks.forEach((id) => {
            dispatch({ type: 'set-front', payload: id })
          })
          tasksDispatch({ type: 'reset-tasks' })
        }, 1500)
        return () => clearTimeout(timer)
      } else {
        // 当前点击的替身和本体匹配
        tasksDispatch({ type: 'reset-tasks' })
      }
    }
  }, [tasks])
  return (
    <AppWrapper title='JoJo Cards Game' date='2023/03/05'>
      <CardsList />
      <div flex justify-center m="t-5 b-10">
        <CountUp status={status} />
        <Button
          onClick={() => {
            dispatch({ type: 'reset-cards' })
            tasksDispatch({ type: 'reset-tasks' })
            clearTimeout(timer)
            setStatus('ready')
          }}
        >RESET</Button>
      </div>
    </AppWrapper>
  )
}

