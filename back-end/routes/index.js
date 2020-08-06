const router = require('express').Router()
const getLoggedUser = require('../middlewares/getLoggedUser')
const Exercise = require('../models/exercise')

router.get('/', getLoggedUser, async (req, res) => {
    try {
        const username = req.loggedUser.username
        const exercises = await Exercise.find({ creatorUsername: username })
        res.json({ exercises: exercises })
    } catch (err) {
        res.json({ errorMessage: `Error: ${err}` })
    }
})

module.exports = router