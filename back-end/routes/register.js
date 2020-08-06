const router = require('express').Router()
const bcrypt = require('bcrypt')
const checkUserExist = require('../middlewares/checkUserExist')
const User = require('../models/user')

router.post('/', checkUserExist, async (req, res) => {
    try {
        const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            username,
            password: hashedPassword
        })
        res.json({ message: `User Created! ${username}`})
        res.redirect('/login')
    } catch (err) {
        res.json({ errorMessage: `Error: ${err}` })
    }
})

module.exports = router