import { useEffect, useRef, useState } from 'react'
import Menalisa from './menalisa.png'
import AppWrapper from '@/components/AppWrapper'

function Link({ text, callback }: { text: string; callback: (...args: unknown[]) => void }) {
  return <button onClick={callback} className='text-2xl text-sky-600 hover:underline m2'>
    {text}
  </button>
}

export default function PictureToCSS() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [pixels, setPixels] = useState<Uint8ClampedArray>(new Uint8ClampedArray())
  const [wh, setWH] = useState<number[]>()
  const [base, setBase] = useState(0.3)
  const [imgCsstyle, setImgCsstyle] = useState('')

  const handleClick = () => {
    inputRef.current?.click()
  }

  // 根据图片计算像素信息
  const calcImagePixels = (img: HTMLImageElement) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)
    const imageData = ctx.getImageData(0, 0, img.width, img.height)
    // 每隔四个值组成图片的一个像素，总长度 = width*height*4
    setPixels(imageData.data)
    setWH([imageData.width, imageData.height])
  }

  // 处理图片上传
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const img = new Image()
      img.src = reader.result as string
      img.onload = () => {
        calcImagePixels(img)
      }
    }
  }

  // 每四个元素为一个像素点的[r,g,b,a]颜色值
  const pixelsMatrix = pixels.reduce((prev, cur, idx) => {
    const i = ~~(idx / 4)
    if (idx % 4 === 0) {
      prev[i] = [cur]
    } else {
      prev[i].push(cur)
    }
    return prev
  }, [] as number[][])

  const boxRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // 将生成的css代码更新到元素上
  useEffect(() => {
    if (!pixelsMatrix.length) return
    if (wh?.length) {
      let initStyle = ''
      const blur = 0
      const res = []
      const [w, h] = wh
      let start = 0
      for (let i = 0; i < w; i++) {
        const y = `${i * 2 * base}px`
        for (let j = 0; j < h; j++) {
          const x = `${j * 2 * base}px`
          const color = `rgba(${pixelsMatrix[start++].join(',')})`
          const v = `${x} ${y} ${blur}px ${base}px ${color}`
          res.push(v)
        }
      }
      initStyle += res.join(',').concat(';')
      const imgStyle = `width: 0;height: 0;box-shadow: ${initStyle}`
      setImgCsstyle(imgStyle)
      const box = boxRef.current
      const cssStyle = `
        ${imgCsstyle}
      `
      box?.setAttribute('style', cssStyle)
      containerRef.current?.setAttribute('style', `
        height: ${h * base * 2}px;
        width: ${w * base * 2}px;
      `)
    }
  }, [pixelsMatrix, wh])

  return <AppWrapper title='Picture To CSS' date='2024/10/14'>
    <div className='flex items-center flex-col'>
      <div className='text-md text-gray-400'>
        <p>Convert the uploaded image to be rendered using CSS box-shadow, please select images that are as close to square-shaped as possible.</p>
        <p>将上传的图片转换为使用 CSS box-shadow 渲染，请选择尽量形似正方形的图片。</p>
      </div>
      <div>
        <Link text="upload" callback={handleClick}/>
        <Link text="-" callback={() => {
          setBase(p => p - 0.05)
        }}/>
        <Link text="+" callback={() => {
          setBase(p => p + 0.05)
        }}/>
        <input ref={inputRef} type='file' accept='image/*' onChange={handleImageUpload} style={{ display: 'none' }} />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
      <div className='relative text-md text-gray-400 my2'>
        <p>Picture rendered by CSS box-shadow(rendering needs time, plz wait):</p>
        <p>CSS box-shadow 渲染的图片（渲染耗时，请等待）：</p>
      </div>
      <div className='relative' ref={containerRef}>
        <div ref={boxRef} className='text-center'>
        </div>
      </div>
      <Link text="copy code" callback={async () => {
        try {
          await navigator.clipboard.writeText(imgCsstyle)
          // eslint-disable-next-line no-alert
          alert('Copy succeed')
        } catch (e) {
          console.log(e) // eslint-disable-line no-console
          // eslint-disable-next-line no-alert
          alert('Copy failed')
        }
      }}/>
    </div>
    <img
      src={Menalisa}
      alt="Menalisa"
      style={{ display: 'none' }}
      onLoad={(e) => {
        calcImagePixels(e.target as HTMLImageElement)
      }}
    />
    <div className='flex-center'>
      <div className='w100 h70 p2 overflow-y-scroll text-gray-400'>{imgCsstyle}</div>
    </div>
    <div>
    </div>
  </AppWrapper>
}
