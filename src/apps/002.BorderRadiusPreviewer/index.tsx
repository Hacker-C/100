import React, { useState } from 'react'
import InputRange from './InputRange'
import TopView from '@/components/TopView'
import Date from '@/components/Date'
import './index.css'

const BorderRadiusPreviewer: React.FC = () => {
  const [tl, setTl] = useState({
    x: '40',
    y: '40'
  })
  const [tr, setTr] = useState({
    x: '60',
    y: '40'
  })
  const [bl, setBl] = useState({
    x: '40',
    y: '60'
  })
  const [br, setBr] = useState({
    x: '60',
    y: '60'
  })
  const code = `
  border-top-left-radius: ${tl.x}% ${tl.y}%;
  border-top-right-radius: ${100 - +tr.x}% ${tr.y}%;
  border-bottom-left-radius: ${bl.x}% ${100 - +bl.y}%;
  border-bottom-right-radius: ${100 - +br.x}% ${100 - +br.y}%;
  `
  const [copyText, setCopyText] = useState('copy')
  return (
    <div>
      <TopView title='Border-radius Previewer'/>
      <div flex-center font-sans mt-10>
        <div h-100 w-100 border="2 solid gray-400" bg-gray-300 relative flex-center>
          <div
            border="5 solid purple-400" h="95" w="95" bg="#e9eaee" flex="center"
            style={{
              borderTopLeftRadius: `${tl.x}% ${tl.y}%`,
              borderTopRightRadius: `${100 - +tr.x}% ${tr.y}%`,
              borderBottomLeftRadius: `${bl.x}% ${100 - +bl.y}%`,
              borderBottomRightRadius: `${100 - +br.x}% ${100 - +br.y}%`
            }}
          >
          <pre font-mono leading-7>
          {code}
          </pre>

          </div>

          <InputRange
            value={tl.x} position='top'
            onMove={(v: string) => {
              setTl({ ...tl, x: v })
            }}
          />
          <span absolute top-0 left-10>{tl.x}%</span>

          <InputRange
            value={tr.x} position='top'
            onMove={(v: string) => {
              setTr({ ...tr, x: v })
            }}
          />
          <span absolute top-0 right-10>{100 - +tr.x}%</span>

          <InputRange
            value={tr.y} position='right'
            onMove={(v: string) => {
              setTr({ ...tr, y: v })
            }}
          />
          <span absolute top-10 right-0>{tr.y}%</span>

           <InputRange
            value={br.y} position='right'
            onMove={(v: string) => {
              setBr({ ...br, y: v })
            }}
          />
          <span absolute right-0 bottom-10>{100 - +br.y}%</span>

          <InputRange
            value={br.x} position='bottom'
            onMove={(v: string) => {
              setBr({ ...br, x: v })
            }}
          />
          <span absolute right-10 bottom-0>{100 - +br.x}%</span>

          <InputRange
            value={bl.x} position='bottom'
            onMove={(v: string) => {
              setBl({ ...bl, x: v })
            }}
          />
          <span absolute left-10 bottom-0>{bl.x}%</span>

          <InputRange
            value={tl.y} position='left'
            onMove={(v: string) => {
              setTl({ ...tl, y: v })
            }}
          />
          <span absolute left-0 top-10>{tl.y}%</span>

          <InputRange
            value={bl.y} position='left'
            onMove={(v: string) => {
              setBl({ ...bl, y: v })
            }}
          />
          <span absolute left-0 bottom-10>{100 - +bl.y}%</span>
        </div>
      </div>
      <div text-center mt-10>
        <button border="1 solid gray-300" px-2 font-sans text="lg gray-500" onClick={() => {
          setCopyText('copied!')
          navigator.clipboard.writeText(code)
          const timer = setTimeout(() => {
            setCopyText('copy')
            clearTimeout(timer)
          }, 2000)
        }}>{copyText}</button>
      </div>
      <Date date='2022/12/05'/>
    </div>
  )
}

export default BorderRadiusPreviewer

