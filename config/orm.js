const connection = require('./connection')
//ORM will be the part of our app talking to the DB
//ORM means object relational mapping

const printQuestionMarks = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push('?')
    }
    return arr.toString()
}
  
// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
let arr = []

// Loop through the keys and push the key/value as a string int arr
for (const key in ob) {
    let value = ob[key]
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
    // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
    if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`
    }
    // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
    arr.push(`${key}=${value}`)
    }
}
    // Translate array of strings to a single comma-separated string
    return arr.toString()
}

// Begin ORM
const orm = {
    // All
    // SELECT * FROM table
    // takes two parameters: table, callback (for asynchronous functionality)
    // MODEL query will be: all(cb){orm.all'burgers',(res)=>cb(res))}
    all(tableInput, cb) {
      const queryString = `SELECT * FROM ${tableInput};`
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err
        }
        cb(result)
      })
    },

    // Insert
    insert(table, cols, vals, cb) {
      let queryString = `INSERT INTO ${table}`;
     //INSERT (cols) INTO table WHERE VALUES (?)
      queryString += ' (' //this is just really nasty looking concatting, relies on lines 14-31
      queryString += cols.toString()
      queryString += ') '
      queryString += 'VALUES ('
      queryString += printQuestionMarks(vals.length);
      queryString += ') '
     //MODEL query will be: insert(cols, vals, cb){orm.insert('burgers', cols, vals, (res)=>cb(res))}
      console.log(queryString);
  
      connection.query(queryString, vals, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
}


// Update

module.exports = orm