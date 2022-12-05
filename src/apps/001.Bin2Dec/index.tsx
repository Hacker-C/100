import type { FC, FormEvent } from 'react'
import { useEffect, useState } from 'react'
import TopView from '@/components/TopView'
import Date from '@/components/Date'

enum Status {
  success = 0,
  error = 1,
  empty = 2
}

const bintoDec = (b: string) => {
  return [...b].reverse().reduce((res, cur, idx) => res + (+cur) * (2 ** idx), 0).toString()
}

const validater = (s: string) => {
  for (const c of s) {
    if (!/[01]/.test(c))
      return false
  }
  return true
}

const Bin2Dec: FC = () => {
  const [bnum, setBnum] = useState('')
  const [dnum, setDnum] = useState('')
  const [status, setStatus] = useState<Status>(Status.empty)
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setBnum(e.currentTarget.value)
  }
  useEffect(() => {
    if (bnum === '') {
      setStatus(Status.empty)
    } else if (!validater(bnum)) {
      setStatus(Status.error)
    } else {
      setStatus(Status.success)
      setDnum(bintoDec(bnum))
    }
  }, [bnum])
  return (
    <div h-screen flex flex-col>
      <TopView title='Bin2Dec'/>
      <main flex-1 flex flex-col justify-center items-center>
        <h1 text='4xl center' font="bold mono">Bin2Dec</h1>
        <p p-1 text="gray-600 md">Enter a binary number to get a decimal number</p>
        <input
          type="text" border="2 solid black" font-mono outline-none text-3xl p-2
          className='w-100 max-w-80%'
          onInput={e => handleInput(e)}
          value={bnum}
        />
        <div mt-5>
          {
            status === Status.empty
              ? <p text-gray-500>Waiting for input...</p>
              : status === Status.error
                ? <p text-red-500>You can only input 1 or 0</p>
                : <p text-green-500>Here is the decimal (base 10) equivalent:</p>
          }
        </div>

        <span h-10 mt-5 text-3xl>{ status === Status.success && dnum }</span>
      </main>
      <Date date='2022/12/03'/>
    </div>
  )
}

export default Bin2Dec
