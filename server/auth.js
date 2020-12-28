const express = require('express')
const jwt = require('jsonwebtoken')
const { users } = require('./db')
const { refreshTokens } = require('./db')

const accessTokenSecret = 'accesstokensecret'
const refreshTokenSecret = 'refreshtokensecrethere'
const tokenDuration = '5 days'

const routerAuth = express.Router()

function createToken (user, shouldExpire = true) {
  return jwt.sign(user, accessTokenSecret, shouldExpire ? { expiresIn: tokenDuration } : {})
}

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.sendStatus(401)
  }

  console.log('verify')
  const token = authHeader.split(' ')[1]

  jwt.verify(token, accessTokenSecret, (err, user) => {
    if (err) {
      console.log(err)
      return res.status(403).send(err.message)
    }

    req.user = user
    next()
  })
}

routerAuth.post('/login', (req, res) => {
  const { email, password } = req.body

  // Filter user from the users array by username and password
  const user = users.find(u => { return u.email === email && u.password === password })

  if (!user) {
    return res.sendStatus(403)
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
  const { refreshToken } = req.body

  if (!refreshToken) {
    return res.sendStatus(400)
  }

  const index = refreshTokens.indexOf(refreshToken)
  if (index >= 0) {
    refreshTokens.splice(index, 1)
  }

  return res.send('Logout successful')
})

routerAuth.get('/me', authenticateJWT, (req, res) => {
  const user = users.find(u => { return u.id === req.user.id })
  if (!user) {
    return res.sendStatus(404)
  }
  return res.json(user)
})

module.exports = { routerAuth, authenticateJWT }
