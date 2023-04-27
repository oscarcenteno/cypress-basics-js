const api = require('../wrappers/cypress_api')

class Questions {
  constructor () {
    this.relativeUrl = '/posts'
  }

  listPosts () {
    return api.get(this.relativeUrl)
  }
}

module.exports = new Questions()
