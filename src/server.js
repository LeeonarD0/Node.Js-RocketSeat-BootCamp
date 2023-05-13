
import http from 'http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

// QUERY PARAMETERS: When I need a URL that is STATEFUL => used for filters, not mandatory, pages
// ROUTE PARAMETERS: GET, DELETE, POSTTo identify resources 
// REQUEST BODY: To send forms informations (https)

//

const server = http.createServer(async (req, res) => {

    const { method, url } = req
    
    await json(req, res)

    const route = routes.find((route) => {
        return route.method === method && route.path.test(url)

        
    })

    if (route) {
        const routeParms = req.url.match(route.path)

        const { query, ...parms } = routeParms.groups


        req.parms = parms
        req.query = query ? extractQueryParams(query) : {}


        return route.handler(req , res)
    }


   
    return res.writeHead('404').end()

})

server.listen(3333)