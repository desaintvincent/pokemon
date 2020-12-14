import useSWR from 'swr'
import FetchError from './FetchError'

const fetcher = (resource, init = {}) => {
  const headers = new Headers(init.headers || {})
  const myInit = {
    method: 'GET',
    ...init,
    headers
  }
  return fetch(resource, myInit).then((response) => {
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
}

const post = (path, body) => fetcher(`http://localhost:3333${path}`, { method: 'POST', body })

const useApi = (path = null) => {
  return useSWR(path ? `http://localhost:3333${path}` : null)
}

export {
  fetcher,
  useApi,
  post
}
