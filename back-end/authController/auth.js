const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        const token = req.session.token
        if (token == null) return res.sendStatus(403)
        const payload = await jwt.verify(token, process.env.JWT_SECRET)
        req.payload = payload
        next()
    } catch (err) {
        res.sendStatus(500)
    }
}