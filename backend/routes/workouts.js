const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET single workouts
router.get('/:id', getWorkout)

// POST new workout
router.post('/', createWorkout)

// DELETE single workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE new workout' })
})

// UPDATE single workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE new workout' })
})

module.exports = router
