const request = require('request')

function get (uri, headers = {}) {
  return new Promise((resolve, reject) => {
    request.get({
      headers,
      uri: uri,
      method: 'GET'
    }, (error, response) => {
      if (error) {
        return reject(error)
      }
      resolve(response)
    })
  })
}

module.exports.get = get
