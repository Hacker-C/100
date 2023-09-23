import { useState } from 'react'
import { LightBox, LightLine, LightTheme } from './LightCircle'
import { LightSpeedCounter } from './LightSpeedCounter'
import AppWrapper from '@/components/AppWrapper'

const initLights = Object.values(LightTheme).filter(item => item !== LightTheme.OFF)

const buttonUnoCss = `
  w14 h14 rounded-full
  b-2 b-purple-600 bg-transparent
  text-black text-sm hover:bg-purple-600
  dark:text-white hover:text-white
  transition-all duration-300
`

export default function ChristmasLights() {
  const [lights, setLights] = useState(initLights)
  const turnOffAll = () => {
    setLights(lights => lights.map(() => LightTheme.OFF))
  }
  const turnOnAll = () => setLights(initLights)
  const [speed, setSpeed] = useState<number>(3)

  return <AppWrapper title='Christmas Lights' date='2023/09/16'>
    <div mt20 flex justify-center className='flex-wrap md:flex-nowrap px10'>
      <div flex mt5 className='md:mr10'>
        {lights.slice(0, 4).map((light, idx) => <LightBox theme={light} showLine={idx !== 3} speed={speed} key={idx}/>)}
      </div>
      <div relative>
        <div bg-pink absolute top-5 right-24 className='hidden md:block'>
          <LightLine show={true} />
        </div>
      </div>
      <div flex mt5>
        {lights.slice(4).map((light, idx) => <LightBox theme={light} showLine={idx !== 3} speed={speed} key={idx}/>)}
      </div>
    </div>
    <p text='center black dark:white' mt15>Click buttons below to control the lights</p>
    <div flex justify-center mt15>
      <div flex>
        <button className={buttonUnoCss} onClick={turnOffAll} mr='5'>OFF</button>
        <button className={buttonUnoCss} onClick={turnOnAll}>ON</button>
        <div mr5/>
        <LightSpeedCounter
          count={speed}
          max={5}
          up={() => setSpeed(speed => speed + 1)}
          down={() => setSpeed(speed => speed - 1)}
          set={setSpeed}
        />
      </div>
    </div>
  </AppWrapper>
}
