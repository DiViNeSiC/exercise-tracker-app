if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const cors = require('cors')
const methodOverride = require('method-override')

const app = express()
const port = process.env.PORT || 3001

const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')
const logoutRoute = require('./routes/logout')
const indexPageRoute = require('./routes/index')
const exercisesRoute = require('./routes/exercise')

const auth = require('./authController/auth')
const notAuth = require('./authController/notAuth')

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', err => console.error(err))
db.once('open', () => console.log('Connected to Mongoose'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(methodOverride('_method'))

app.use('/register', notAuth, registerRoute)
app.use('/login', notAuth, loginRoute)
app.use('/logout', auth, logoutRoute)
app.use('/', auth, indexPageRoute)
app.use('/exercises', auth, exercisesRoute)

app.listen(port, () => {
    console.log(`Server Running On Port: ${port}`);
})