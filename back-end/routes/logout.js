const router = require('express').Router()

router.delete('/', (req, res) => {
    req.session.token = null
    req.payload = null
    
    res.redirect('/login')
})

module.exports = router