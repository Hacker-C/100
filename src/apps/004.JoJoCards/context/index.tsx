import type { Dispatch, ReactNode } from 'react'
import { createContext, useContext, useReducer } from 'react'
import type { Hero } from '../data'
import initHeros from '../data'
import { shuffle } from '../helpers'
import type { ACTION_TYPE, ACTION_TYPE2 } from './reducer'
import { herosReducer, tasksReducer } from './reducer'

const HerosContext = createContext<Hero[]>([])
const DispatchContext = createContext<Dispatch<ACTION_TYPE> | null>(null)
const TasksContext = createContext<number[]>([])
const TasksDispatchContext = createContext<Dispatch<ACTION_TYPE2> | null>(null)

export function useHeros() {
  return useContext(HerosContext)
}

export function useDispatch() {
  return useContext(DispatchContext)
}

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatchContext() {
  return useContext(TasksDispatchContext)
}

function init<T extends Hero[]>(initHeros: T): T {
  return shuffle<T>(initHeros)
}

function CardsContextProvider({ children }: { children: ReactNode }) {
  const [heros, dispatch] = useReducer(herosReducer, initHeros, init)
  const [tasks, tasksDispatch] = useReducer(tasksReducer, [])
  return (
    <HerosContext.Provider value={heros}>
      <DispatchContext.Provider value={dispatch}>
        <TasksContext.Provider value={tasks}>
          <TasksDispatchContext.Provider value={tasksDispatch}>
            {children}
          </TasksDispatchContext.Provider>
        </TasksContext.Provider>
      </DispatchContext.Provider>
    </HerosContext.Provider>
  )
}

export default CardsContextProvider
