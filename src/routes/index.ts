import type React from 'react'
import { lazy } from 'react'
import Home from '@/apps'
const ErrorPage = lazy(() => import('@/error-page'))
const Bin2Dec = lazy(() => import('@/apps/001.Bin2Dec'))
const BorderRadiusPreviewer = lazy(() => import('@/apps/002.BorderRadiusPreviewer'))
const MemeMaker = lazy(() => import('@/apps/003.MemeMaker'))
const JoJoCards = lazy(() => import('@/apps/004.JoJoCards'))
const Calculator = lazy(() => import('@/apps/005.Calculator'))
const ChristmasLights = lazy(() => import('@/apps/006.ChristmasLights'))
const JujutsuIDCard = lazy(() => import('@/apps/007.JujutsuIDCard'))
const WorkClockOff = lazy(() => import('@/apps/008.WorkClockOff'))
const PictureToCSS = lazy(() => import('@/apps/009.PictureToCSS'))

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
    path: '003',
    element: MemeMaker,
    meta: {
      title: 'Meme Maker'
    }
  },
  {
    path: '004',
    element: JoJoCards,
    meta: {
      title: 'JoJo Cards Game'
    }
  },
  {
    path: '005',
    element: Calculator,
    meta: {
      title: 'Calculator'
    }
  },
  {
    path: '006',
    element: ChristmasLights,
    meta: {
      title: 'Christmas Lights'
    }
  },
  {
    path: '007',
    element: JujutsuIDCard,
    meta: {
      title: 'Jujutsu ID Card'
    }
  },
  {
    path: '008',
    element: WorkClockOff,
    meta: {
      title: 'Work Clock Off'
    }
  },
  {
    path: '009',
    element: PictureToCSS,
    meta: {
      title: 'Picture To CSS'
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
