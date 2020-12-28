import React, { createContext, useContext, useEffect, useState } from 'react'
import { useApiWithToken } from '../api/api'

const AuthContext = createContext({
  loading: true,
  logged: false
})

const useAuth = () => {
  return useContext(AuthContext)
}

const useStorage = (key, defaultValue) => {
  const [data, setData] = useState(localStorage.getItem(key) || defaultValue)

  const removeData = () => {
    setData(undefined)
  }

  useEffect(() => {
    if (data !== undefined) {
      localStorage.setItem(key, data)
    } else {
      localStorage.removeItem(key)
    }
  }, [data, key])

  return [data, setData, removeData]
}

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useStorage('accessToken', '')
  const [refreshToken, setRefreshToken] = useStorage('refreshToken', '')
  const [loading, setLoading] = useState(true)
  const [logged, setLogged] = useState(false)

  const { data: user, error, mutate } = useApiWithToken('/me', accessToken)

  useEffect(() => {
    if (error) {
      setLoading(false)
      setLogged(false)
    }
    if (user) {
      setLoading(false)
      setLogged(true)
    }
  }, [error, user])

  const authenticate = ({ accessToken: _accessToken = '', refreshToken: _refreshToken = '' }) => {
    setAccessToken(_accessToken)
    setRefreshToken(_refreshToken)
    setLoading(false)
    setLogged(!!_accessToken && !!_refreshToken)
    mutate()
  }

  return (
    <AuthContext.Provider value={{
      accessToken,
      refreshToken,
      loading,
      logged,
      user,
      authenticate
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth }
export default AuthProvider
