const mysql = require('mysql2/promise')

class Tasks {
  getPool () {
    const config = require('./database.env')

    // Create a MySQL connection pool
    return mysql.createPool(config)
  }

  async deleteData () {
    try {
      const pool = this.getPool()
      // Insert the data into the database
      const result = await pool.query('DELETE FROM mytable')

      // Return the result as JSON
      return { success: true, result }
    } catch (error) {
      console.error(error)
      return { success: false, error: error.message }
    }
  }

  // Define a task for inserting data into the database
  async insertData (data) {
    try {
      const pool = this.getPool()
      // Insert the data into the database
      const result = await pool.query('INSERT INTO mytable SET ?', data)

      // Return the result as JSON
      return { success: true, result }
    } catch (error) {
      console.error(error)
      return { success: false, error: error.message }
    }
  }

  // Define a task for selecting data from the database
  async selectData () {
    try {
      const pool = this.getPool()
      // Select all data from the database
      const [rows] = await pool.query('SELECT * FROM mytable')
      console.log('selectData:' + rows)

      // Return the result as JSON
      return { success: true, data: rows }
    } catch (error) {
      console.error(error)
      return { success: false, error: error.message }
    }
  }
}

const db = new Tasks()

module.exports = {
  deleteData: () => db.deleteData(),
  insertData: data => db.insertData(data),
  selectData: () => db.selectData()
}
