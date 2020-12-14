/*
Sample input:
node SimpleGet '{"hostname": "login.microsoftonline.com", "path": "/consumers/v2.0/.well-known/openid-configuration"}'
*/

const https = require('https')

const args = process.argv.slice(2)

console.log(args[0])
let input = JSON.parse(args[0])

const options = {
    hostname: input['hostname'],
  port: 443,
    path: input['path'],
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
      process.stdout.write(JSON.stringify(JSON.parse(d), null, 2))
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
