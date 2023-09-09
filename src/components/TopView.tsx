import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

interface AppProps {
  title: string
  /**
 * 是否使用暗黑模式
 */
  dark?: boolean
}

function TopView({ title, dark = false }: AppProps) {
  const clazz = dark ? 'text-white' : 'text-black'
  return (
    <Link to="/">
      <header p-4 flex font-mono>
        <Icon icon="material-symbols:arrow-back-ios-rounded" width="20" className={clazz}/>
        <h1 flex-1 text-center font-bold>{title} App</h1>
      </header>
    </Link>

  )
}

export default TopView
