const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('This is Home Page')
    }
    if(req.url === '/about') {
        res.end('This is About Page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cant seem to find the page you are looking</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)
