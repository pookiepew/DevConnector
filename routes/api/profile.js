const express = require('express')
const router  = express.Router()

//* method    GET
//* route     api/profile
//* desc      Test route
//* access    Public
//TODO        Nothing - just test

router.get('/', (req, res) => res.send('Profile Route'))

module.exports = router