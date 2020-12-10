import useSWR from 'swr'
import FetchError from './FetchError'

export const fetcher = (resource, init) =>
  fetch(resource, init).then((response) => {
    if (response.ok) {
      return response.json()
    }

    return response
      .text()
      .catch(() => {
        throw new FetchError(response)
      })
      .then((text) => {
        console.log('text', text)
        throw new FetchError(response, text)
      })
  })

export const useApi = (path = null) => {
  return useSWR(path ? `http://localhost:3333${path}` : null)
}
