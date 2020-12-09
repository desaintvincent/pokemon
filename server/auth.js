const express = require('express')
const jwt = require('jsonwebtoken')
const { users } = require('./db')
const { refreshTokens } = require('./db')

const accessTokenSecret = 'accesstokensecret'
const refreshTokenSecret = 'refreshtokensecrethere'
const tokenDuration = '5m'

const routerAuth = express.Router()

function createToken (user, shouldExpire = true) {
  return jwt.sign(user, accessTokenSecret, shouldExpire ? { expiresIn: tokenDuration } : {})
}

routerAuth.post('/login', (req, res) => {
  const { username, password } = req.body

  // Filter user from the users array by username and password
  const user = users.find(u => { return u.username === username && u.password === password })

  if (!user) {
    res.send('Username or password incorrect')
  }

  const accessToken = createToken(user)
  const refreshToken = createToken(user, false)

  refreshTokens.push(refreshToken)

  res.json({
    accessToken,
    refreshToken
  })
})

routerAuth.post('/refresh', (req, res) => {
  const { token: refreshToken } = req.body

  if (!refreshToken) {
    return res.sendStatus(401)
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403)
  }

  jwt.verify(refreshToken, refreshTokenSecret, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }

    const accessToken = createToken(user)

    return res.json({
      accessToken
    })
  })
})

routerAuth.post('/logout', (req, res) => {
  const { token: refreshToken } = req.body

  if (!refreshToken) {
    return res.sendStatus(401)
  }

  const index = refreshTokens.indexOf(refreshToken)
  if (index < 0) {
    return res.sendStatus(403)
  }

  refreshTokens.splice(index, 1)
  return res.send('Logout successful')
})

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.sendStatus(401)
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(token, accessTokenSecret, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }

    req.user = user
    next()
  })
}

module.exports = { routerAuth, authenticateJWT }
