import FetchError from '../api/FetchError'

export function fetchUser () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // fake auth
      if (!document.cookie.includes('swr-test-token=swr')) {
        const error = new FetchError()
        error.status = 403
        reject(error)
      }
      resolve({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        avatar: 'https://github.com/shuding.png'
      })
    }, 500)
  })
}
