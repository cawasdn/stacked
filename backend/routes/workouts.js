const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET single workouts
router.get('/:id', getWorkout)

// POST new workout
router.post('/', createWorkout)

// DELETE single workout
router.delete('/:id', deleteWorkout)

// UPDATE single workout
router.patch('/:id', updateWorkout)

module.exports = router
