const router = require('express').Router()
const getLoggedUser = require('../middlewares/getLoggedUser')
const User = require('../models/user')
const Exercise = require('../models/exercise')

router.get('/', (req, res) => {
    res.send('Index')
})

router.delete('/delete-account', getLoggedUser, async (req, res) => {
    try {
        const userExercises = await Exercise.find({ creatorUsername: req.loggedUser.username })
        if (userExercises.length > 0) {
            return res.status(403).send({ errorMessage: 'Error: The User still have Exercises!' })
        }
        await User.findByIdAndDelete(req.loggedUser.id)
    } catch (err) {
        res.status(500).send({ errorMessage: `${err}` })
    }
})

module.exports = router