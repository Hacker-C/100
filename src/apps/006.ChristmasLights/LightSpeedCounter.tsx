interface LightSpeedCounterProps {
  count: number
  max?: number
  min?: number
  up?: () => void
  down?: () => void
  set?: (count: number) => void
}

export const LightSpeedCounter = ({ count, max = 5, min = 0, up, down, set }: LightSpeedCounterProps) => {
  const buttonUnoCss = (type: 'up' | 'down') => `
    w7 h7 b-2 b-purple-600 hover:bg-purple-600
    ${type === 'up' ? 'rounded-tr-xl mb1' : 'rounded-br-xl'}
    text-black dark:text-white hover:text-white
  `
  const leftButtonUnoCss = `
    h15 w7 b-2 b-purple-600 hover:bg-purple-600
    rounded-l-xl text-white
    text-black dark:text-white hover:text-white
  `
  const inputUnoCSS = `
    b-2 b-purple-600
    outline-0 focus:outline-purple-600
    w15 h15 text-center text-lg mx1
    dark:bg-gray-800 dark:text-white
  `
  return <div flex>
    <button className={leftButtonUnoCss} onClick={() => set?.(3)}> R </button>
    <input type="text" className={inputUnoCSS} value={count} onInput={(e) => {
      const value = Number((e.currentTarget as HTMLInputElement).value)
      if (value < min) {
        return set?.(min)
      }
      if (value > max) {
        return set?.(max)
      }
      set?.(value)
    }}/>
    <div flex flex-col>
      <button className={buttonUnoCss('up')} onClick={() => { count < max && up?.() }} > + </button>
      <button className={buttonUnoCss('down')} onClick={() => { count > min && down?.() }}> - </button>
    </div>
  </div>
}
