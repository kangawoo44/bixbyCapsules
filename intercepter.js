const router = require('express').Router();
// const http = require('../utility/http');
const fs = require('fs')

router.post('/', intercepter);

function intercepter (req, res) {
    console.log(req.body)
    let jsonString = JSON.stringify(req.body, null, 2)
    fs.writeFileSync('./test.js', jsonString)
    return res.send('OK')
    //res.sendStatus(200) === res.status(200).send('OK')
}

module.exports = router