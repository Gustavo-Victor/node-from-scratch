import { createServer } from "node:http"; 

const server = createServer((req, res) => {
    console.log("oi");
    res.write('<h1>Hello</h1>'); 
    return res.end('No more things will be printed after me...')
}); 

server.listen(4000); 


