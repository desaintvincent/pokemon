import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  loading: true,
  logged: false,
})

const useAuth = () => {
  return useContext(AuthContext)
}

const useStorage = (key) => {
  const [data, setData] = useState(localStorage.getItem(key))

  const removeData = () => {
    setData(undefined)
  }

  useEffect(() => {
    if (data !== undefined) {
      localStorage.setItem(key, data)
    } else {
      localStorage.removeItem(key)
    }
  },[data, key])

  return [data, setData, removeData]
}

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useStorage('accessToken')
  const [refreshToken, setRefreshToken] = useStorage('refreshToken')
  const [loading, setLoading] = useState(true)
  const [logged, setLogged] = useState(false)

  const authenticate = ({accessToken: _accessToken, refreshToken: _refreshToken}) => {
    setAccessToken(_accessToken)
    setRefreshToken(_refreshToken)
    setLoading(false)
    setLogged(true)
  }

  return (
    <AuthContext.Provider value={{
      accessToken,
      loading,
      logged,
      authenticate
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth }
export default AuthProvider
