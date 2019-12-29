const express = require('express')
const router  = express.Router()

//* method    GET
//* route     api/auth
//* desc      Test route
//* access    Public
//TODO        Nothing - just test

router.get('/', (req, res) => res.send('Auth Route'))

module.exports = router