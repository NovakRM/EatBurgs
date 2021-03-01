const express = require('express')
const router = express.Router()
const burger = require('../models/burgmodels.js')
//depends on burgmodels

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    }
    res.render('index', hbsObject)
  })
})

// Insert
router.post('/api/burgers', (req, res) => {
  burger.insert(['burger_name', 'devoured'], [req.body.name, req.body.devoured], (result) => {
    // ID of new burger: 
    res.json({ id: result.insertId })
  })
})

// Update
router.put('/api/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;
  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end()
      }
      res.status(200).end()
    }
  )
})

//Delete
router.delete('/api/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`

  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end()
    }
    res.status(200).end()
  })
})

module.exports = router