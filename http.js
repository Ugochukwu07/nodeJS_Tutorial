//HTTP Module

const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('<h1>Welcome to our home page</h1>')
    }else if(req.url === '/about'){
        res.end("Here is about us")
    }else{
        res.end(`
            <h1>Oops</h1>
            <p>We can't seem to find the page your looking for</p>
            <a href="/">Back Home</a>
        `)
    }
})

server.listen(5000)