const express = require('express')
const initDatabase = require('./database')
const port = 4242


const app = express()
  
const db = initDatabase()



app.get('/', (req, res) => {
  res.json({
    hello: 'From Pokedex API'
  })
})
  
app.listen(4242, () => {
    console.log('Server is listening on port 4242')
})