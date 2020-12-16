import { useEffect, useState } from 'react'
import { post } from './api'

const useAuth = () => {
  const [loading, setLoading] = useState(true)
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLogged(false)
      setLoading(false)
    }, 500)
  }, [])

  return {
    loading,
    logged
  }
}

const login = (data) => post('/login', data)

export default useAuth
export { login }
