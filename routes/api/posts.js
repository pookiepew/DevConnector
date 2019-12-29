const express = require('express')
const router  = express.Router()

//* method    GET
//* route     api/posts
//* desc      Test route
//* access    Public
//TODO        Nothing - just test

router.get('/', (req, res) => res.send('Posts Route'))

module.exports = router