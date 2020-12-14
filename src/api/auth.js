import { useEffect, useState } from 'react'

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
    logged,
  }
}

export default useAuth;
