import http from 'node:http'

// class InverseNumberStream extends Transform {
//     _transform(chunk, encoding, callback){
//         const transformed = Number(chunk.toString()) * -1

//         console.log(transformed)

//         callback(null, Buffer.from(String(transformed)))
//     }
// }


const server = http.createServer(async (req, res) => {

    const buffers = []

    for await (const chunk of req) {       //Chunk is the information that req receive and then we push this information to the arrays "BUFFERS"
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString()

    console.log(fullStreamContent)

    return res.end(fullStreamContent)

    // return req 
    // .pipe(new InverseNumberStream())
    // .pipe(res)
})


server.listen(3334)