const User = require('../models/user')

module.exports = async (req, res, next) => {
    try {
        const allUsers = await User.find()
        const lowerCaseUsername = req.body.username.toLowerCase()
        const nameExist = allUsers.some(user => {
            return user.username.toLowerCase() === lowerCaseUsername
        })
        if (nameExist) return res.json({ message: 'Username is already exist!' })
        next()
    } catch (err) {
        res.redirect('/register')
    }
}