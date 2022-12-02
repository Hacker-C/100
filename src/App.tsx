import { Link } from 'react-router-dom'
import type { FC } from 'react'
import Item from '@/components/Item'

export interface AppItem {
  id: string
  title: string
}

const apps: AppItem[] = [
  { id: '001', title: 'Bin2Dec' },
  { id: '002', title: 'Bin2Dec' },
  { id: '003', title: 'Bin2Dec' }
]

const App: FC = () => {
  return (
    <div mt-20 lg:mx-50 md:mx-40 sm:mx-30 mx-20 font-mono>
      <h1 text="xl primary" font="mono bold" py-1>100 React Apps</h1>
      <div mb-5 text-gray-500>
        Try to implement apps from
        <a href="https://github.com/florinpop17/app-ideas" target="_blank" text-primary> here </a>
        with React.
      </div>
      <div flex flex-wrap mb-10>
        {
          apps.map(({ id, title }) => {
            return (
              <div key={id} m="r-20">
                <Link to={`/${id}`}>
                  <Item title={title} id={id}/>
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
