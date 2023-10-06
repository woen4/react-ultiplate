import { useQuery } from '@tanstack/react-query'
import { IUser } from '../types'

type UseUsersOptions = {
  userKey: string
}

export const useUsers = ({ userKey }: UseUsersOptions) => {
  return useQuery<IUser>({
    queryKey: ['users', userKey],
  })
}
