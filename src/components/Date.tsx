export default function (props: { date: string }) {
  return (
    <footer flex flex-row-reverse p-2>
      <span font-mono text-gray-400>{ props.date }</span>
    </footer>
  )
}
