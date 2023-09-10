import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useDark } from '@/hooks'

interface AppProps {
  title: string
}

function TopView({ title }: AppProps) {
  const { isDark, toggleTheme } = useDark()
  return (
    <Link to="/">
      <header pl-4 h15 flex-center font-mono dark:text-white>
        <Icon icon="material-symbols:arrow-back-ios-rounded" width="20" />
        <h1 flex-1 text-center font-bold>{title} App</h1>
        <div
          w15 h15 flex items-center flex-row-reverse pr5
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            toggleTheme()
          }}
        >
          {
            <Icon
              icon={isDark ? 'carbon:sun' : 'carbon:moon'}
              color={isDark ? '#f1c40f' : '#f39c12'}
              width="20"
            />
          }
        </div>

      </header>
    </Link>

  )
}

export default TopView
