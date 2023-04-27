const actions = require('./dashboard/dashboard.actions')
const questions = require('./dashboard/dashboard.questions.js')

describe('Dashboard', () => {
  it('Dashboard should have correct title', () => {
    // Given 'John' had access to Dashboard module
    actions.login()

    // Then the Dashboard will be available
    questions.titleShouldContain('APPOINTMENT PLANNER')
  })
})
