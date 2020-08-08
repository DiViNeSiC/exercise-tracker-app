const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

router.get('/', (req, res) => {
    res.status(403).send('Not logged in!')
})

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username })

        if (user == null) return res.status(404).send({ errorMessage: 'User not found' })

        const correctPassword = await bcrypt.compare(password, user.password)
        
        if (!correctPassword) return res.status(403).send({ errorMessage: 'Incorrect Password' })
        
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET)
        req.headers.authorization = token
        res.json({ user: user, token: token })
    } catch (err) {
        res.status(500).send({ errorMessage: `Error: ${err}` })
    }
})

module.exports = router