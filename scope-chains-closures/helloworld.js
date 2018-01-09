const http = require('http');

const hostname = '0.0.0.0';
const port = 5000;

const server = http.createServer((request, response) => {
    const { headers, method, url } = request
    let body = []
    request.on('error', (err) => {
	console.error(err);
    }).on('data', (chunk) => {
	body.push(chunk);
    }).on('end', () => {
	body = Buffer.concat(body).toString();
	// BEGINNING OF NEW STUFF

	response.on('error', (err) => {
	    console.error(err);
	});

	response.writeHead(200, {'Content-Type': 'application/json'})

	const responseBody = { headers, method, url, body }

	response.write(JSON.stringify(responseBody, null, 4))
	response.end()
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
