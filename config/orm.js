const connection = require('./connection')
//ORM will be the part of our app talking to the DB
//ORM means object relational mapping


// All
const selectAll = {
    selectAll: function (err, res){
        let query = 'SELECT * FROM burgers'
        connection.query(query, function (err, res){
            if (err) throw err
        })
        res(result)
    }
}

// Insert
const insertOne = () => {
connection.query(
    'INSERT INTO burgers (burger) VALUES (?)',
    [req.body.burger],
    (err, result) => {
        if (err) {
        return res.status(500).end();
        }

        // Send back the ID of the new plan
        console.log({ id: result.insertId });
        res.json({ id: result.insertId });
    })
}

// Update
const updateOne = () => {
    connection.query(
        'UPDATE plans SET burger = ? WHERE id = ?', //id is important for figuring out what to edit
        [req.body.burger, req.params.id],
        (err, result) => {
          if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
          }
          if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
        }
    );
}
module.exports = orm