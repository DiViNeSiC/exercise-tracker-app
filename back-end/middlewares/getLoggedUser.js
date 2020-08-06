const User = require('../models/user')

module.exports = async (req, res, next) => {
    try {
        const loggedUser = await User.findById(req.payload.id)
        if (loggedUser == null) return res.sendStatus(403)
        req.loggedUser = loggedUser
        next()
    } catch (err) {
        res.json({ errorMessage: `Error: ${err}` })
    }
}