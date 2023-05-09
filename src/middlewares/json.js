export async function json(req, res){
    const buffers = []

    for await (const chunk of req) {       //Chunk is the information that req receive and then we push this information to the arrays "BUFFERS"
        buffers.push(chunk)
    }
    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch {
        req.body = null
    }

    
    res.setHeader('Content-type', 'application/json')
}