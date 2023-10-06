import { homeRoutes } from '@/features/home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([...homeRoutes])
export const AppRoutes = () => <RouterProvider router={router} />
