module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]

    if (token) 
        return res.send('Already logged in !')
    
    next()
} 