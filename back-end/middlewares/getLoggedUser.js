const User = require('../models/user')

module.exports = async (req, res, next) => {
    try {
        const loggedUser = await User.findById(req.payload.id)
        if (loggedUser == null) 
            return res.status(403).json({ errorMessage: 'Error: You Are Not Logged in!' })
            
        req.loggedUser = loggedUser
        next()
    } catch (err) {
        res.status(500).send({ errorMessage: `${err}` })
    }
}