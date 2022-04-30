const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<p>hi</p>')
})

server.listen(port, () => {
    console.log('up n running!')
})