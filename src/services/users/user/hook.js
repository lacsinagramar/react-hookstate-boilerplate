import { useQuery } from 'react-query'
import { useGlobalState } from 'store'
import { getUserAPI } from './api'

const USER_QUERY_KEY = 'user'

export const useUser = () => {
  const {
    data,
    isLoading,
    error,
    refetch,
    isSuccess
  } = useQuery(USER_QUERY_KEY, getUserAPI, {
    enabled: false
  })

  const globalState = useGlobalState()

  if (isSuccess) {
    globalState.merge({ user: data })
  }

  return {
    getUser: refetch,
    user: data,
    isLoading,
    isSuccess,
    error
  }
}
