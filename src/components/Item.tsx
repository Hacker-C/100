interface AppItem {
  id: string
  title: string
}

function Item(props: AppItem) {
  const { id, title } = props
  return (
    <div mt-1 font-mono whitespace-nowrap>
      <span text-gray-400>{ id }. </span>
      <span text-gray-600>{ title }</span>
    </div>
  )
}

export default Item
