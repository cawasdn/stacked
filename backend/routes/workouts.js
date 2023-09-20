const express = require('express')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'GET all workouts' })
})

// GET single workouts
router.get('/:id', (req, res) => {
  res.json({ mssg: 'GET single workout' })
})

// POST new workout
router.post('/', (req, res) => {
  res.json({ mssg: 'POST new workout' })
})

// DELETE single workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE new workout' })
})

// UPDATE single workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE new workout' })
})

module.exports = router
