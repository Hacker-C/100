import React from 'react'

interface Props {
  color?: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, onClick, color = '#fc9c07' }: Props) {
  return (
    <button
      border="1px solid"
      className="w-30 h-10 rounded-md px-2 py-1 text-lg mx-2"
      style={{ color, borderColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
