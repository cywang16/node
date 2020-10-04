/*
 * based on [display html page with node.js](https://stackoverflow.com/questions/15231864/display-html-page-with-node-js)
 */

var args = process.argv.slice(2)

console.log(args[0])

var http = require('http'), fs = require('fs')

fs.readFile(args[0], function (err, html) {
    if (err) {
        throw err
    }

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"})
        response.write(html)
        response.end()
    }).listen(8080)
})