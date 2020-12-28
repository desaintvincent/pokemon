import { post } from './api'

const login = post('/login')

const logout = post('/logout')

export { login, logout }
