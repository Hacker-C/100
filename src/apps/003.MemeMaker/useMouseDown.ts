import type React from 'react'

export default function useMouseDown(
  e: React.MouseEvent<HTMLDivElement>,
  elem: React.MutableRefObject<HTMLDivElement | undefined>,
  setFn: Function
) {
  let [x, y, startX, startY, moveX, moveY] = [0, 0, 0, 0, 0, 0]
  x = e.pageX
  y = e.pageY
  startX = elem.current?.offsetLeft as number
  startY = elem.current?.offsetTop as number
  window.addEventListener('mousemove', fn)
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', fn)
  })
  function fn(e: MouseEvent) {
    moveX = e.pageX - x
    moveY = e.pageY - y
    const pos = { left: startX + moveX, top: startY + moveY }
    setFn(pos)
  }
}
