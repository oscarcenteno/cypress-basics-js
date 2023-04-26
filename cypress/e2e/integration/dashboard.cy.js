const actions = require('./dashboard/dashboard.actions')
const questions = require('./dashboard/dashboard.questions.js')

describe('Dashboard', () => {
  it('should load correctly', () => {
    actions.openDashboard()
    questions.titleShouldContain('APPOINTMENT PLANNER')
  })
})
