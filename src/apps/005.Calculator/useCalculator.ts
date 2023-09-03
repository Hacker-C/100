import { useState } from 'react'

export enum Operator {
  AC = 'AC', None = '', Divide = '÷', Delete = 'C',
  Seven = '7', Eight = '8', Nine = '9', Multiply = '×',
  Four = '4', Five = '5', Six = '6', Minus = '-',
  One = '1', Two = '2', Three = '3', Plus = '+',
  Zero = '0', None1 = '', EQUAL = '='
}

export enum Constant {
  ERROR = 'ERROR'
}

const operators = [...Object.values(Operator), '/', '*']

export const useCalculator = () => {
  const [input, setInput] = useState<string>('')
  let output = ''
  let error = false

  try {
    const expression = input === '' ? '""' : input.replace(/×/g, '*').replace(/÷/g, '/')
    if (!([Operator.Plus, Operator.Minus, Operator.Multiply, Operator.Divide].includes(input.at(-1) as Operator)
      && /[0-9]/.test(input.at(-2) ?? ''))) {
      // eslint-disable-next-line no-eval
      const result = eval(expression)
      output = result.toString()
    } else {
      // eslint-disable-next-line no-eval
      const result = eval(expression.slice(0, -1))
      output = result.toString()
    }
  } catch {
    output = Constant.ERROR
    error = true
    setInput((pre) => {
      if (pre === '') return ''
      return pre.slice(0, -1)
    })
  }

  const clear = () => {
    setInput('')
  }

  const add = (value: string) => {
    if (!error) {
      setInput((preInput) => {
        const sum = preInput + value
        const numbers = sum.split(/[+×÷-]/)
        if (numbers.some(number => number.length > 8)) {
          error = true
          return preInput
        }
        error = false
        return sum
      })
    }
    error = false
  }

  const deleteOne = () => {
    setInput(input.slice(0, -1))
  }

  const execute = (operator: Operator) => {
    if (!operators.includes(operator)) {
      return
    }
    switch (operator) {
      case Operator.AC:
        return clear()
      case Operator.Delete:
        return deleteOne()
      case Operator.EQUAL:
        return setInput(output)
      default:
        return add(operator)
    }
  }

  return {
    input,
    output,
    execute
  }
}
