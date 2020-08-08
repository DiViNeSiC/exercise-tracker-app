const router = require('express').Router()
const bcrypt = require('bcrypt')
const checkUserExist = require('../middlewares/checkUserExist')
const User = require('../models/user')

router.get('/', (req, res) => {
    res.status(403).send('Not logged in!')
})

router.post('/', checkUserExist, async (req, res) => {
    try {
        const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            username,
            password: hashedPassword
        })
        res.json({ message: `User Created! ${username}`})
    } catch (err) {
        res.status(500).send({ errorMessage: `${err}` })
    }
})

module.exports = router