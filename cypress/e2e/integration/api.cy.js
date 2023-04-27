const questions = require('./posts/posts.questions')
const actions = require('./posts/posts.actions')

describe('Posts', () => {
  it('can list all posts', () => {
    const request = questions.listPosts()
    request.should((response) => {
      expect(response.status).to.equal(200)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
  })

  it('can create a new post', () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    const request = actions.createPost(newPost)

    request.then(response => {
      expect(response.status).to.equal(201)
      expect(response.body).to.eql({ ...newPost, id: 101 })
    })
  })

  it('can update an existing post', () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    actions.createPost(newPost)
    const request = actions.updatePost({
      title: 'foo',
      body: 'bar',
      userId: 1,
      id: 1
    })

    request.then(response => {
      expect(response.status).to.equal(200)
    })
  })
})
