const router = require('express').Router();
// const http = require('../utility/http');
const fs = require('fs')

router.post('/', intercepter);

function intercepter (req, res) {
    // console.log(req.body)
    let items = req.body
    // items = items.filter(x => x.hasSomething)
    let jsonString = JSON.stringify(items, null, 2)
    fs.appendFileSync('./log.js', jsonString)
    // fs.writeFileSync('./test.js', jsonString)
    console.log(jsonString)
    return res.send('OK')
    //res.sendStatus(200) === res.status(200).send('OK')
}

module.exports = router