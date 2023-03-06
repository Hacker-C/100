import type initHeros from '../data'
import { shuffle } from '../helpers'

export function herosReducer(heros: typeof initHeros, action: ACTION_TYPE) {
  return new Map()
    .set('set-front', () => {
      if (!heros.some(hero => !hero.isFront)) {
        return heros
      }
      return heros.map(hero => (
        action.payload === hero.id ? { ...hero, isFront: !hero.isFront } : hero
      ))
    })
    .set('reset-cards', () => shuffle(heros).map(hero => ({ ...hero, isFront: false })))
    .get(action.type)()
}

export type ACTION_TYPE =
  | { type: 'set-front'; payload: number }
  | { type: 'reset-cards'; payload?: null }

export function tasksReducer(tasks: number[], action: ACTION_TYPE2) {
  return new Map()
    .set('add-task', () => {
      if (tasks.length === 0) {
        return [...tasks, action.payload!]
      }
      if (tasks.length === 1) {
        return [...tasks, action.payload!]
      }
      return tasks
    })
    .set('reset-tasks', () => {
      return []
    })
    .get(action.type)()
}

export type ACTION_TYPE2 =
    | { type: 'add-task'; payload: number }
    | { type: 'reset-tasks'; payload?: null }
