require('dotenv').config()
const express = require('express')

//express app
const app = express()

// middleware || CodeBlocks that runs when accessing routes
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.get('/', (req, res) => {
  res.json({ mssg: 'welcome to the app' })
})

// listen for requests
app.listen(process.env.PORT || 4000, () => {
  console.log('listening on port 4000')
})
