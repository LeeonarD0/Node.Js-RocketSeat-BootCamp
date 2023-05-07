
import http from 'http'

const users = []

const server = http.createServer((req, res) => {

    const {method, url } = req
    
    if (method === 'GET' && url === '/users') {
       return res
       .setHeader('Content-type', 'application/json')
       .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Leonardo',
            email: 'dasda@gmail.com'
        })

        return res.writeHead(201).end()
        
    }

    return res.end('Hello World!')

})
 
server.listen(3333)