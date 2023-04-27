const actions = require('./dashboard/dashboard.actions')
const questions = require('./dashboard/dashboard.questions.js')

describe('Dashboard', () => {
  it('Dashboard should have correct title', () => {
    // Given 'John' went to "dashboard" page
    actions.openDashboard()

    // Then the title should be expected
    questions.titleShouldContain('APPOINTMENT PLANNER')
  })
})
