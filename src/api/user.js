import useSWR from 'swr'
import { fetchUser } from '../mock/auth'

export function useMe () {
  const { data, mutate, error } = useSWR('me', fetchUser)

  const loading = !data && !error
  const loggedOut = loading || (!!error && error.status === 403)

  return {
    loading,
    loggedOut,
    user: data,
    refresh: mutate
  }
}
