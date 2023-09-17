import { Link } from 'react-router-dom'
import type { FC } from 'react'
import Item from '@/components/Item'
import { useDark } from '@/hooks'
// TODO
// import routes from '@/routes'

const routes = [
  { path: '/', title: 'Home' },
  { path: '001', title: 'Bin2Dec' },
  { path: '002', title: 'Border-radius' },
  { path: '003', title: 'Meme Maker' },
  { path: '004', title: 'JoJo Cards Game' },
  { path: '005', title: 'Calculator' },
  { path: '006', title: 'Christmas Lights' },
  { path: '*', title: 'Page not found' }
]

const Home: FC = () => {
  const { isDark, toggleTheme } = useDark()
  return (
    // mt-20 lg:mx-50 md:mx-40 sm:mx-30 mx-5
    // min-w-[350px]
    <div font-mono className='centered'>
      <h1 text="xl primary" font="mono bold" py-1>100 Apps</h1>
      <div mb-5 text-gray-500 dark:text-gray-300>
        Try to implement apps(some come from
        <a href="https://github.com/florinpop17/app-ideas" target="_blank" text-primary> here</a>
      ) with React.
      </div>
      <div className='grid gap-x-4 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {
          routes.map(({ path, title }) => {
            return /\d/.test(path) && (
              <div key={path}>
                <Link to={`/${path}`}>
                  <Item title={title} id={path} />
                </Link>
              </div>
            )
          })
        }
      </div>
      <div text-gray-500 mt5>
        <a href="https://mphy.me" target="_blank" hover:text-primary>@mphy</a>
        <span> · </span>
        <a href="https://github.com/Hacker-C/100" target="_blank" hover:text-primary>github</a>
        <span> · </span>
        <span
          className='cursor-pointer'
          onClick={toggleTheme}
        >{ isDark ? 'light' : 'dark' }</span>
      </div>
    </div>
  )
}

export default Home
