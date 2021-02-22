const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.use(express.static(path.join(__dirname, '/')))
app.set('view engine', 'handlebars')

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT)
  })