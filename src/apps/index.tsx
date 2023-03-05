import { Link } from 'react-router-dom'
import type { FC } from 'react'
import Item from '@/components/Item'
// import routes from '@/routes'

const routes = [
  { path: '/', title: 'Home' },
  { path: '001', title: 'Bin2Dec' },
  { path: '002', title: 'Border-radius Previewer' },
  { path: '003', title: 'Meme Maker' },
  { path: '*', title: 'Page not found' }
]

const App: FC = () => {
  return (
    <div mt-20 lg:mx-50 md:mx-40 sm:mx-30 mx-5 font-mono className='min-w-[350px]'>
      <h1 text="xl primary" font="mono bold" py-1>100 React Apps</h1>
      <div mb-5 text-gray-500>
        Try to implement apps from
        <a href="https://github.com/florinpop17/app-ideas" target="_blank" text-primary> here </a>
        with React.
      </div>
      <div flex flex-wrap mb-10>
        {
          routes.map(({ path, title }) => {
            return /\d/.test(path) && (
              <div key={path} m="r-20">
                <Link to={`/${path}`}>
                  <Item title={title} id={path} />
                </Link>
              </div>
            )
          })
        }
      </div>
      <div text-gray-500>
        <a href="https://mphy.me" target="_blank">@mphy</a>
        <span> . </span>
        <a href="https://github.com/Hacker-C/100" target="_blank">github</a>
        <div text-gray-400>from 2022/12/02</div>
      </div>
    </div>
  )
}

export default App
