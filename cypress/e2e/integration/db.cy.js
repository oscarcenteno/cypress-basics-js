// @ts-nocheck
describe('Accessing the database', () => {
  it('can insert and select data', () => {
    cy.task('deleteData').then(result => {
      expect(result.success).to.equal(true)
    })

    cy.task('insertData', { name: 'John Doe', email: 'john.doe@example.com' }).then(result => {
      expect(result.success).to.equal(true)
    })

    cy.task('selectData').then(result => {
      expect(result.success).to.equal(true)
      expect(result.data.length).to.equal(1)
      expect(result.data[0].name).to.equal('John Doe')
      expect(result.data[0].email).to.equal('john.doe@example.com')
    })
  })
})
