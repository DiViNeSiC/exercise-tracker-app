const Exercise = require('../models/exercise')

module.exports = async (req, res, next) => {
    try {
        const username = req.loggedUser.username
        const exercise = await Exercise.findById(req.params.id)

        if (exercise == null) 
            return res.status(404).send({ errorMessage: 'Error: Exercise Not Found' })

        if (exercise.creatorUsername !== username) 
            return res.status(403).send({ errorMessage: 'Error: You Cannot Access To The Exercise' })

        next()
    } catch (err) {
        res.status(500).send({ errorMessage: `${err}` })
    }
}