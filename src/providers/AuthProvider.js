import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  loading: true,
  logged: false,
})

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [loading, setLoading] = useState(true)
  const [logged, setLogged] = useState(false)


  useEffect(() => {
    setAccessToken(() => localStorage.getItem('accessToken') || '')
    setRefreshToken(() => localStorage.getItem('refreshToken') || '')
  },[])

  return (
    <AuthContext.Provider value={{
      loading,
      logged
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth }
export default AuthProvider
