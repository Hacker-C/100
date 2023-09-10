import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import routes from '@/routes/index'
import type { RouteType } from '@/routes/index'

interface Props {
  route: RouteType
}

const Loading = () => <h1 text-center h-100vh leading-100vh text-xl text-primary>Loading...</h1>

const DomTitle = ({ route }: Props) => {
  if (route?.meta?.title)
    document.title = `${route.meta.title} | 100 React Apps`
  return (
    <Suspense fallback={<Loading />}>
      <route.element />
    </Suspense>
  )
}

export default function App() {
  return (
    <div bg="dark:#1e2030"className='min-h-[100vh] v-100vw duration-200'>
      <Router>
        <Routes>
          {routes.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={<DomTitle route={item} />}
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}
