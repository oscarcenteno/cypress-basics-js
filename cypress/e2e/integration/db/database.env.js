const env = process.env.REPORT_PORTAL_ENVIRONMENT_NAME || 'local'

// in github actions "ci", it should be the name of the container, but localloy it is localhost

const configs = {
  local: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
  },
  dev: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
  },
  ci: {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
  }

}

module.exports = configs[env]
