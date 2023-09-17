import { useEffect, useRef } from 'react'
import './LightCircle.css'

export interface LightBoxProps {
  theme?: LightTheme
  showLine?: boolean
  speed?: number
}
export enum LightTheme {
  RED = 'red',
  ORANGE = 'orange',
  YELLOW = 'yellow',
  GREEN = 'green',
  BLUE = 'blue',
  INDIGO = 'indigo',
  PURPLE = 'purple',
  PINK = 'pink',
  OFF = 'light-off'
}
/**
 * @description the whole light box
 */
export function LightBox(props: LightBoxProps) {
  const { theme = LightTheme.RED, showLine = true, speed = 1 } = props
  return (
    <div block relative w='24' last:w14>
      <LightCircle theme={theme} speed={speed}/>
      <LightLine show={showLine} />
    </div>
  )
}

interface LightCircleProps {
  theme: LightTheme
  speed: number
}
/**
 * @description circle
 */
function LightCircle({ theme, speed }: LightCircleProps) {
  const circleRef = useRef<HTMLDivElement>(null)

  // control animation speed
  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.animation = `${theme}-light ${(5 - speed) * 0.5 + 0.5}s infinite`
    }
  }, [speed])

  return <div flex flex-col items-center w14 >
    <div w4 h4 bg='orange-900' rounded-sm z-9 />
    <div h='14' w='14' rounded='full' mt='-0.6' className={`${theme}`} ref={circleRef} />
  </div>
}

/**
 * @description line
 */
export function LightLine({ show }: { show: boolean }) {
  if (!show) {
    return <></>
  }
  return (
    <div
      h4 w20 absolute top-1 left-9 overflow-hidden
      after='block content-none h40 w40 absolute bottom-0 -left-1/2 rounded-full b-2 border-gray-500'
    />
  )
}
