import useSWR from 'swr'
import FetchError from './FetchError'
import { useAuth } from '../providers/AuthProvider'
const basePath = 'http://localhost:3333'
const fetcher = (resource, init = {}, accessToken = null) => {
  const headers = new Headers(init.headers || {})
  if (accessToken) {
    headers.set('Authorization', 'Bearer ' + accessToken)
  }

  const myInit = {
    method: 'GET',
    mode: 'cors',
    ...init,
    headers
  }

  return fetch(resource, myInit).then((response) => {
    const contentType = response.headers.get('content-type')
    if (!response.ok) {
      throw new FetchError(response)
    }

    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json()
    }

    return response
      .text()
      .catch(() => {
        throw new FetchError(response)
      })
      .then((message) => {
        return { message }
      })
  }).catch(error => {
    if (error instanceof FetchError) {
      throw error
    }
    throw new FetchError({
      type: myInit.method,
      url: resource,
      status: -1,
      statusText: error.message
    })
  })
}

const post = (path) => (body = {}, accessToken = '') => fetcher(`http://localhost:3333${path}`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
}, accessToken)

const useApiWithToken = (path = null, accessToken = null) => useSWR(path ? [basePath + path, accessToken] : null, (ressource, accessToken) => fetcher(ressource, {}, accessToken))

const useApi = (path = null) => {
  const { accessToken } = useAuth()

  return useApiWithToken(path, accessToken)
}

export {
  basePath,
  fetcher,
  useApiWithToken,
  useApi,
  post
}
