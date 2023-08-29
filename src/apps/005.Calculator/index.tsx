import React from 'react'
import AppWrapper from '@/components/AppWrapper'
import './index.css'

enum Operator {
  AC = 'AC', PlusMinus = '+/-', Divide = '÷', Delete = 'del',
  Seven = '7', Eight = '8', Nine = '9', Multiply = '×',
  Four = '4', Five = '5', Six = '6', Minus = '-',
  One = '1', Two = '2', Three = '3', Plus = '+',
  Zero = '0', PI = 'π', DOT = '.', EQUAL = '='
}

const buttons = Object.values(Operator)

const Calculator: React.FC<{}> = () => {
  return <AppWrapper title='Calculator' date='2023/08/29'>
    <div
      h160 w100 centered flex flex-wrap justify-between rounded
      className='container bg-[#56585d]'
    >
      <div
        h20 w100 leading-20
        text='2xl white'
        font-bold
        flex flex-row-reverse
      >
        -2398908
      </div>
      {
        buttons.map((text, index) => {
          return <CalButton key={index} text={text} />
        })
      }
    </div>
  </AppWrapper>
}

export default Calculator

interface CalButtonProps {
  text: Operator
  onClick?: () => void
}

function CalButton({ text }: CalButtonProps) {
  return <button
    w18 h18 rounded-full text-center leading-18 cursor-pointer
    text='xl' font='bold sans'
    hover:opacity-80
    className={getClass(text)}
    active:opacity-60 active:scale-95 duration-250
  >
    {text}
  </button>
}

function getClass(text: Operator) {
  if ([Operator.AC, Operator.PlusMinus, Operator.Divide].includes(text)) {
    return 'bg-[#a6a6a6] text-black'
  }
  if ([Operator.Delete, Operator.Multiply, Operator.Minus, Operator.Plus, Operator.EQUAL].includes(text)) {
    return 'bg-[#ff9501] text-white'
  }
  return 'bg-[#333333] text-white'
}
