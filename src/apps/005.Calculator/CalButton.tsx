import { Fa6SolidDeleteLeft } from './Fa6SolidDeleteLeft'
import { Operator } from './useCalculator'

interface CalButtonProps {
  text: Operator
  disabled: boolean
  onClick: () => void
}

export function CalButton({ text, disabled, onClick }: CalButtonProps) {
  return <button
    h18 rounded-full cursor-pointer
    flex justify-center items-center
    text='xl' font='bold sans'
    hover:opacity-80
    className={getClass(text)}
    active:opacity-60 active:scale-95 duration-250
    disabled:cursor-not-allowed disabled:opacity-60
    onClick={() => onClick()}
    disabled={disabled}
  >
    {
      text === Operator.Delete
        ? <Fa6SolidDeleteLeft />
        : text
    }
  </button>
}

function getClass(text: Operator) {
  if ([Operator.AC, Operator.Divide].includes(text)) {
    return 'bg-[#a6a6a6] text-black w18'
  }
  if ([Operator.Delete, Operator.Multiply, Operator.Minus, Operator.Plus, Operator.EQUAL].includes(text)) {
    return 'bg-[#ff9501] text-white w18'
  }
  if ([Operator.Zero].includes(text)) {
    return 'bg-[#333333] text-white w40'
  }
  return 'bg-[#333333] text-white w18'
}
