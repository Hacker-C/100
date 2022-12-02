import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

interface AppProps {
  title: string
}

function BackToHome({ title }: AppProps) {
  return (
    <header p-4 flex font-mono>
      <Link to="/" hover:text-black>
        <Icon icon="material-symbols:arrow-back-ios-rounded" width="20" text-gray-500 hover:text-black/>
      </Link>
      <h1 flex-1 text-center font-bold>{title} App</h1>
    </header>
  )
}

export default BackToHome
