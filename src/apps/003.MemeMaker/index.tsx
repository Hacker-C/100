import type { LegacyRef } from 'react'
import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import Image1 from './assets/001.jpg'
import Image2 from './assets/002.jpg'
import Image3 from './assets/003.jpg'
import useMouseDown from './useMouseDown'
import Date from '@/components/Date'
import TopView from '@/components/TopView'

function MemeMaker() {
  const [imgSrc, setImgSrc] = useState(Image1)
  const [title, setTitle] = useState('群阴性')
  const [desc, setDesc] = useState('时不时来看看有谁阳了')
  const titleRef = useRef<HTMLDivElement>()
  const descRef = useRef<HTMLDivElement>()
  const [titleFontSize, setTitleFontSize] = useState(40)
  const [descFontSize, setDescFontSize] = useState(26)
  const [titlePos, setTitlePos] = useState({ left: 0, top: 200 })
  const [descPos, setDescPos] = useState({ left: 0, top: 260 })

  const memeRef = useRef<HTMLDivElement>()
  const download = () => {
    html2canvas(memeRef.current as HTMLDivElement).then((canvas) => {
      const image = canvas.toDataURL()
      const aDownloadLink = document.createElement('a')
      aDownloadLink.download = 'canvas_image.png'
      aDownloadLink.href = image
      aDownloadLink.click()
    })
  }
  return (
    <>
      <TopView title="Meme Maker"/>
      <main max-w-md min-w-sm className='relative left-50% -translate-x-50%' my-5>

        {/* 最终生成表情 */}
        <div w-80 className='relative left-50% -translate-x-50%' ref={memeRef as LegacyRef<HTMLDivElement>}>
          {/* 表情原图 */}
          <img src={imgSrc} alt="meme img" h="80"/>

          {/* 显示标题 */}
          <div
            text="4xl white" p="1"
            className='absolute min-h-12 cursor-move select-none w-100% text-center'
            style={{
              ...titlePos,
              fontSize: `${titleFontSize}px`
            }}
            ref={titleRef as LegacyRef<HTMLDivElement>}
            onMouseDown={e => useMouseDown(e, titleRef, setTitlePos)}
          >{title}</div>

          {/* 显示描述信息 */}
          <div
            text="2xl white" p="1"
            className='absolute min-h-12 cursor-move select-none w-100% text-center'
            style={{
              ...descPos,
              fontSize: `${descFontSize}px`
            }}
            ref={descRef as LegacyRef<HTMLDivElement>}
            onMouseDown={e => useMouseDown(e, descRef, setDescPos)}
          >{desc}</div>
        </div>

        {/* 待选的三个熊猫原图表情 */}
        <div flex justify-center flex-wrap>
          {
            [Image1, Image2, Image3].map((Image, idx) => {
              return (
                <img
                  w='20' m="5" border="3 solid gray-300 rounded"
                  src={Image} alt={`image${idx}`} key={idx}
                  onClick={() => setImgSrc(Image)}
                  style={{
                    borderColor: imgSrc === Image ? 'skyblue' : '#d1d5db'
                  }}
                />
              )
            })
          }
        </div>

        <div mt-5 text-center>
          {/* 修改标题 */}
          <input
            border="1 solid gray-500"
            text="xl gray-600"
            className='px-2 outline-none'
            type="text" value={title}
            onInput={e => setTitle((e.target as HTMLInputElement).value)}
          />

          {/* 修改标题字体 */}
          <input
            type="range" min="20" max="50" m="l-3 r-2"
            value={titleFontSize}
            onChange={e => setTitleFontSize(+(e.target as HTMLInputElement).value)}
          />

          {/* 修改描述信息 */}
          <input
            border="1 solid gray-500"
            text="xl gray-600"
            className='px-2 outline-none mt-5'
            type="text" value={desc} onInput={e => setDesc((e.target as HTMLInputElement).value)}
          />

          {/* 修改描述信息字体 */}
          <input
            type="range" min="10" max="30" m="l-3 r-2"
            value={descFontSize}
            onChange={e => setDescFontSize(+(e.target as HTMLInputElement).value)}
          />
        </div>

        <div text="xl center blue-500" mt-5>
          <button onClick={download}>保存图片</button>
        </div>
      </main>
      <Date date='2022/12/17'/>
    </>
  )
}

export default MemeMaker
