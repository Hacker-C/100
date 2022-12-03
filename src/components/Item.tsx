import type { AppItem } from '@/apps/Home'

function Item(props: AppItem) {
  const { id, title } = props
  return (
    <div mt-1 font-mono>
      <span text-gray-400>{ id }. </span>
      <span text-gray-600>{ title }</span>
    </div>
  )
}

export default Item
