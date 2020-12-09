const express = require('express')
const bodyParser = require('body-parser')
const { routerAuth } = require('./auth')
const { authenticateJWT } = require('./auth')
const { books } = require('./db')
const { get } = require('./util')

const app = express()
app.use(bodyParser.json())

const port = 3333

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.send();
});

app.use('/', routerAuth)

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.get('/books', authenticateJWT, (req, res) => {
  return res.json(books)
})

app.get('/pokemon*', (req, res) =>
  get(`https://pokeapi.co/api/v2${req.url}`)
    .then(apiResult => res.json(JSON.parse(apiResult.body)))
    .catch(() => res.sendStatus(404))
)

app.listen(port, () => {
  console.log(`pokemon server at http://localhost:${port}`)
})
