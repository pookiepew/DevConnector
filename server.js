const express   = require('express')
const connectDB = require('./config/db')
//! const cors      = require('cors')

const app = express()

connectDB()

// const whitelist = ['http://devconnector.sorbo.rocks', 'http://dev.sorbo.rocks']

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }


//* Init middleware

//! app.use(cors(corsOptions))

app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API Running'))


//* Define routes

app.use('/api/users',   require('./routes/api/users'))
app.use('/api/auth',    require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts',   require('./routes/api/posts'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))