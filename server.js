// export function createServer () {
//     console.log("I am a server")
// }


// module.exports = {createServer}

const http = require("http")


// console.log(http)
const PORT = 8000;

const server = http.createServer((req, res) => {

if(req.method === "POST"){
    console.log("post request")
    res.end("done")
} else {

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    const data = {
        message: "Hello World",
        timestamp: new Date().toISOString()
    }

    const jsonData = JSON.stringify(data)
    res.end(jsonData)
}
})

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})