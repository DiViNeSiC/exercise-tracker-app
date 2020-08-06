const Exercise = require('../models/exercise')

module.exports = async (req, res, next) => {
    try {
        const username = req.loggedUser.username
        const exercise = await Exercise.findById(req.params.id)

        if (exercise == null) return res.redirect('/exercises')
        if (exercise.creatorUsername !== username) return res.sendStatus(403)

        next()
    } catch (err) {
        res.json({ errorMessage: `Error: ${err}` })
    }
}