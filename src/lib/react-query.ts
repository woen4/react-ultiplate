import { QueryClient, QueryFunction } from '@tanstack/react-query'
import { axiosInstance } from './axios'

const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
  const { data } = await axiosInstance.get(
    queryKey.join('/').replaceAll('/?', '?').replaceAll('/&', '&'),
  )
  return data
}

export const queryClient = new QueryClient({
  defaultOptions: { queries: { queryFn: defaultQueryFn } },
})
