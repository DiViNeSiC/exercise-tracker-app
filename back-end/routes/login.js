const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username })

        if (user == null) return res.status(404).json({ message: 'User not found' })

        const correctPassword = await bcrypt.compare(password, user.password)
        
        if (!correctPassword) return res.status(403).json({ message: 'Incorrect Password' })
        
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET)
        req.session.token = token
        res.json({ user: user, token: token })
    } catch (err) {
        res.json({ ErrorMessage: `Error: ${err}` })
    }
})

module.exports = router