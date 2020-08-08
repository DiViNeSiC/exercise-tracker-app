const router = require('express').Router()
const getLoggedUser = require('../middlewares/getLoggedUser')
const isUserExercise = require('../middlewares/checkUserExercise')
const Exercise = require('../models/exercise')

router.get('/', getLoggedUser, async (req, res) => {
    try {
        const username = req.loggedUser.username
        const exercises = await Exercise.find({ creatorUsername: username })
        res.json({ exercises: exercises })
    } catch (err) {
        res.status(500).send({ errorMessage: err })
    }
})

router.post('/create', getLoggedUser, async (req, res) => {
    try {
        const { title, duration, date } = req.body
        const username = req.loggedUser.username
        const newExercise = new Exercise({
            title: title,
            duration: duration,
            date: Date.parse(date),
            creatorUsername: username
        })
        await newExercise.save()
        res.json({ exercise: newExercise })
    } catch (err) {
        res.status(500).send({ errorMessage: err })
    }
})

router.get('/:id', getLoggedUser, isUserExercise, async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id)
        res.json({ exercise })
    } catch (err) {
        res.status(500).send({ errorMessage: err })
    }
})

router.put('/:id', getLoggedUser, isUserExercise, async (req, res) => {
    try {
        const { title, duration, date } = req.body
        const updateMethods = { 
            title: title,
            duration: duration,
            date: Date.parse(date)
        }
        const exercise = await Exercise.findByIdAndUpdate(req.params.id, updateMethods)
        res.json({ exercise })
    } catch (err) {
        res.status(500).send({ errorMessage: err })
    }
})

router.delete('/:id', getLoggedUser, isUserExercise, async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndDelete(req.params.id)
        res.json({ message: `Exercise deleted: ${exercise.title}` })
    } catch (error) {
        res.status(500).send({ errorMessage: `${err}` })
    }
})


module.exports = router