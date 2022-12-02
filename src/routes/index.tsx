import {
  createBrowserRouter
} from 'react-router-dom'

import ErrorPage from '@/error-page'
import App from '@/App'
import Bin2Dec from '@/apps/001.Bin2Dec'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/001',
    element: <Bin2Dec message='Bin2Dec App'/>
  },
  {
    path: '/test',
    element: <div>test</div>
  }
])

export default router
