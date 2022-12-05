import type React from 'react'
import ErrorPage from '@/error-page'
import Home from '@/apps/Home'
import Bin2Dec from '@/apps/001.Bin2Dec'
import BorderRadiusPreviewer from '@/apps/002.BorderRadiusPreviewer'

export interface RouteType {
  path: string
  element: React.FC
  meta: {
    title: string
  }
}

const routes: RouteType[] = [
  {
    path: '/',
    element: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '001',
    element: Bin2Dec,
    meta: {
      title: 'Bin2Dec'
    }
  },
  {
    path: '002',
    element: BorderRadiusPreviewer,
    meta: {
      title: 'Border-radius Previewer'
    }
  },
  {
    path: '*',
    element: ErrorPage,
    meta: {
      title: 'Page not found'
    }
  }
]

export default routes
