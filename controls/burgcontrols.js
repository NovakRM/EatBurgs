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
    console.log(hbsObject)
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

module.exports = router