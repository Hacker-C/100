interface AppItem {
  id: string
  title: string
}

function Item(props: AppItem) {
  const { id, title } = props
  return (
    <div mt-1 font-mono whitespace-nowrap hover:text-red>
      <span text-gray-400>{ id }. </span>
      <span text-gray-600 dark:text-gray-200 hover:text-primary>{ title }</span>
    </div>
  )
}

export default Item
