const express = require('express')
const router  = express.Router()

//* method    GET
//* route     api/users
//* desc      Test route
//* access    Public
//TODO        Nothing - just test

router.get('/', (req, res) => res.send('Users Route'))

module.exports = router