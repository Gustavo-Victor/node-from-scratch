import { fastify } from "fastify"; 
import { DatabasePostgres } from "./database.js";

const server = fastify(); 
const database = new DatabasePostgres(); 

server.get('/videos', async(request, reply) => {
    const { search } = request.query;
    console.log(request.query, search); 
    const videos = await database.read(search);
    return videos;  
}); 

server.post('/videos', async(request, reply) => {
    const { title, description, duration } = request.body;
    await database.create({
        title, 
        description, 
        duration
    });
    return reply.status(201).send();  
}); 

server.put('/videos/:id', async(request, reply) => {
    const id = request.params.id;  
    const { title, description, duration } = request.body;
    await database.update(id, { title, description, duration }); 
    return reply.status(204).send(); 
}); 

server.delete('/videos/:id', async(request, reply) => {
    const id = request.params.id; 
    await database.delete(id); 
    return reply.status(204).send(); 
}); 

server.listen({
    port: process.env.PORT ?? 4000 
}); 

