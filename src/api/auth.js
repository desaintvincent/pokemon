import { post } from './api'

const login = (data) => post('/login', data)

export { login }
