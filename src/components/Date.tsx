export default function (props: { date: string }) {
  return (
    <footer flex flex-row-reverse fixed right-2 bottom-1>
      <span font-mono text-gray-400>{ props.date }</span>
    </footer>
  )
}
