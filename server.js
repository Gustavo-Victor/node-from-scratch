import { fastify } from "fastify"; 
import { DatabaseMemory } from "./database-memory.js";

const server = fastify(); 
const database = new DatabaseMemory(); 

server.get('/videos', (request, reply) => {
    const { search } = request.query;
    console.log(request.query, search); 
    const videos = database.read(search);
    return videos;  
}); 

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body;
    database.create({
        title, 
        description, 
        duration
    });
    return reply.status(201).send();  
}); 

server.put('/videos/:id', (request, reply) => {
    const id = request.params.id;  
    const { title, description, duration } = request.body;
    database.update(id, { title, description, duration }); 
    return reply.status(204).send(); 
}); 

server.delete('/videos/:id', (request, reply) => {
    const id = request.params.id; 
    database.delete(id); 
    return reply.status(204).send(); 
}); 

server.listen({
    port: 4000
}); 

