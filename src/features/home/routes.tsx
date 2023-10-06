import { RouteObject } from 'react-router-dom'
import { Landing } from './pages/Landing'

export const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />,
  },
]
