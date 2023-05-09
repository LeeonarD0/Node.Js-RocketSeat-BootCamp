
import http from 'http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// QUER PARAMETERS:
// ROUTE PARAMETERS: 
// REQUEST PARAMETERS: 

//

const server = http.createServer(async (req, res) => {

    const { method, url } = req
    
    await json(req, res)

    const route = routes.find((route) => {
        return route.method === method && route.path === url
    })

    if (route) {
        return route.handler(req , res)
    }

    console.log(route)

   
    return res.writeHead('404').end()

})

server.listen(3333)