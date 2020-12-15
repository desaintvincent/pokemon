import useSWR from 'swr'
import FetchError from './FetchError'

const responseBody = (response) => {
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  }
  return response.text()
}

const fetcher = (resource, init = {}) => {
  const headers = new Headers(init.headers || {})
  const myInit = {
    method: 'GET',
    mode: 'cors',
    ...init,
    headers
  }
  return fetch(resource, myInit).then((response) => {
    const contentType = response.headers.get("content-type");
    if (!response.ok) {
      console.log('response', response)
      throw new FetchError(response)
    }

    if (contentType && contentType.indexOf("application/json") !== -1) {
      return response.json();
    }

    return response
      .text()
      .catch(() => {
        throw new FetchError(response)
      })
      .then((text) => {
        throw new FetchError(response, text)
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

const post = (path, body) => fetcher(`http://localhost:3333${path}`, { method: 'POST', body })

const useApi = (path = null) => {
  return useSWR(path ? `http://localhost:3333${path}` : null)
}

export {
  fetcher,
  useApi,
  post
}
