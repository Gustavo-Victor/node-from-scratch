import { fastify } from "fastify";

const server = fastify(); 

server.get('/', () => {
    return 'Hello World!'; 
}); 

server.get('/rocketseat', () => {
    return 'Hello Rocketseat!'; 
}); 

server.get('/node', () => {
    return 'Hello Node!'; 
}); 


server.listen({ 
    port: 4000, 
}); 

