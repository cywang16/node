/*
 * based on [display html page with node.js](https://stackoverflow.com/questions/15231864/display-html-page-with-node-js)
 */

var express = require('express')
app = express()
app.use('/', express.static(__dirname + '/'))
app.listen(8080)