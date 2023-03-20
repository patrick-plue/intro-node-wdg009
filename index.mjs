//COMMONJS

// const os = require("os")
// const _ = require("lodash")
// const {createServer} = require("./server")

// // console.log(os.freemem())

// // console.log(_.shuffle([1,2,3,4,5]))

// createServer();

//ESMODULES

// import { createServer } from "./server.js";

// createServer();

//COMMONJS

// const {readFile} = require("node:fs/promises")

// async function fileReader() {
//     try {
//         const data = await readFile("file.txt", "utf-8")
//         console.log(data)
//     } catch(error){
//         console.error(error)
//     }
// }

// fileReader()

//ESMODULES
// import {readFile} from "fs/promises"

// const data = await readFile("file.txt", "utf-8")
// console.log(data)