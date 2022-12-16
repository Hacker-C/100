import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'
import routes from '@/routes/index'
import type { RouteType } from '@/routes/index'

interface Props {
  route: RouteType
}

const DomTitle = ({ route }: Props) => {
  if (route?.meta?.title)
    document.title = `${route.meta.title} | 100 React Apps`
  return (
    <Suspense fallback={<h1 text-center>Loading...</h1>}>
      <route.element />
    </Suspense>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={<DomTitle route={item}/>}
            />
          )
        })}
      </Routes>
    </Router>
  )
}
