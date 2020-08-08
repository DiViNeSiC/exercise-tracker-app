const router = require('express').Router()

router.delete('/', (req, res) => {
    req.headers.authorization = null
    req.payload = null
    
    res.send('Logout')
})

module.exports = router