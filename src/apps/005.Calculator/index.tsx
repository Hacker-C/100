import React from 'react'
import { CalButton } from './CalButton'
import { Operator, useCalculator } from './useCalculator'
import AppWrapper from '@/components/AppWrapper'
import './index.css'

const buttons = Object.values(Operator)

const Calculator: React.FC<{}> = () => {
  const { input, output, execute } = useCalculator()
  return <AppWrapper title='Calculator' date='2023/08/29'>
    <div
      h160 w100 centered flex flex-wrap justify-between rounded
      className='container bg-[#56585d]'
    >
      <div
        h20 w100 overflow-hidden px5
        font-bold text-white text-right
      >
        <div
          className='scrollbar h10 w70 text-3xl overflow-x-auto output text-white  whitespace-nowrap text-right bg-transparent outline-none'
          ref={(el) => {
            if (el) {
              el.scrollLeft = el.scrollWidth
            }
          }}
        >{input}</div>
        <div h10 text-2xl overflow-x-auto whitespace-nowrap className='scrollbar'>{output || '0'}</div>
      </div>
      {
        buttons.map((text, index) => {
          return <CalButton
            key={index}
            text={text}
            onClick={() => {
              execute(text)
            }}
            disabled={text === Operator.None}
          />
        })
      }
    </div>
  </AppWrapper>
}

export default Calculator
