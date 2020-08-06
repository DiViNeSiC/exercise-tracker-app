module.exports = (req, res, next) => {
    const token = req.session.token
    if (token) return res.json({ message: 'You are already logged in'})
    next()
} 