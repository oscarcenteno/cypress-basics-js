const api = require('../wrappers/cypress_api')

class Actions {
  constructor () {
    this.relativeUrl = '/posts'
  }

  createPost ({ title, body, userId }) {
    return api.post({ relativeUrl: this.relativeUrl, body: { title, body, userId } })
  }

  updatePost ({ id, title, body, userId }) {
    const postUrl = `${this.relativeUrl}/${[id]}`
    return api.put({ relativeUrl: postUrl, body: { id, title, body, userId } })
  }

  deletePost ({ id }) {
    const postUrl = `${this.relativeUrl}/${[id]}`
    return api.delete({ relativeUrl: postUrl })
  }
}

module.exports = new Actions()
