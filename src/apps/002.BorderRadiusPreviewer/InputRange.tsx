interface InputRangeProps {
  value: string
  position: 'top' | 'right' | 'bottom' | 'left'
  onMove: (v: string) => void
}

export default function InputRange({ value, position, onMove }: InputRangeProps) {
  let posClass = ''
  switch (position) {
    case 'top':
      posClass = 'item absolute -left-0.5 -top-3'
      break
    case 'right':
      posClass = 'absolute -right-51 top-47.5 rotate-90'
      break
    case 'bottom':
      posClass = 'absolute left-0 -bottom-1.5'
      break
    default:
      posClass = 'absolute -left-49.5 top-47.5 rotate-90'
  }

  return (
    <>
      <input
        type="range" min="0" max="100" step="1" w="100" h="4" border="rounded-lg"
        list="tickmarks"
        className={posClass}
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          backgroundColor: 'transparent'
        }}
        value={value}
        onChange={e => onMove(e.currentTarget.value)}
      />
      <datalist id="tickmarks">
        {
          Array.from({ length: 10 }, (_, i) => i * 10).map((n) => {
            return <option key={n} value={n}></option>
          })
        }
      </datalist>
    </>

  )
}
