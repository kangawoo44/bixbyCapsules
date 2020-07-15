const router = require('express').Router();
// const http = require('../utility/http');
const fs = require('fs')

router.post('/', intercepter);

function intercepter (req, res) {
    console.log(req.body)
    let jsonString = JSON.stringify(req.body, null, 2)
    fs.writeFileSync('./test.js', jsonString)
    return null
}

module.exports = router