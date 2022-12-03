import type React from 'react'
import ErrorPage from '@/error-page'
import Home from '@/apps/Home'
import Bin2Dec from '@/apps/001.Bin2Dec'

export interface RouteType {
  path: string
  element: React.FC
  meta?: {
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
    path: '*',
    element: ErrorPage
  }
]

export default routes
