require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

// middleware || CodeBlocks that runs when accessing routes
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// listen for requests
app.listen(process.env.PORT || 4000, () => {
  console.log('listening on port 4000')
})
