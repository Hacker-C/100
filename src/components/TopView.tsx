import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

interface AppProps {
  title: string
}

function TopView({ title }: AppProps) {
  return (
    <Link to="/" hover:text-black>
      <header p-4 flex font-mono>
        <Icon icon="material-symbols:arrow-back-ios-rounded" width="20" text-gray-500 hover:text-black/>
        <h1 flex-1 text-center font-bold>{title} App</h1>
      </header>
    </Link>

  )
}

export default TopView
