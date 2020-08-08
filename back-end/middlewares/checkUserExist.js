const User = require('../models/user')

module.exports = async (req, res, next) => {
    try {
        const allUsers = await User.find()
        const lowerCaseUsername = req.body.username.toLowerCase()
        const nameExist = allUsers.some(user => {
            return user.username.toLowerCase() === lowerCaseUsername
        })
        if (nameExist) 
            return res.status(403).send({ errorMessage: 'Username is already exist!' })
            
        next()
    } catch (err) {
        res.status(500).send({ errorMessage: `Error: ${err}` })
    }
}