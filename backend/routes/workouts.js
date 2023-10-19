const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

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
