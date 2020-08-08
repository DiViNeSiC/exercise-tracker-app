const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (token == null) 
            return res.status(401).send('Not Authorized!')
        
        const payload = await jwt.verify(token, process.env.JWT_SECRET)
        req.payload = payload
        next()
    } catch (err) {
        res.status(500).send({ errorMessage: `Error: ${err}` })
    }
}