import useSWR from 'swr'
import FetchError from './FetchError'

export const fetcher = (resource, init) =>
  fetch(resource, init).then((res) => {
    // fake auth
    if (!document.cookie.includes('swr-test-token=swr')) {
      const error = new FetchError(res)
      error.status = 403
      throw error
    }

    if (res.ok) {
      return res.json()
    }

    return res
      .text()
      .catch(() => {
        throw new FetchError(res)
      })
      .then((text) => {
        console.log('text', text)
        throw new FetchError(res, text)
      })
  })

export const useApi = (path = null) => {
  return useSWR(path ? `https://pokeapi.co/api/v2${path}` : null)
}
