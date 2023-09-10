import { randomUUID } from "node:crypto"; 

export class DatabaseMemory {
    #database = new Map(); 
    
    create(video) {
        const id = randomUUID(); 
        this.#database.set(id, video); 
    }

    read(search) {
        return Array.from(this.#database.entries())
            .map(videoItem => {
                const id = videoItem[0]; 
                const data = videoItem[1];
                return { id, ...data }; 
            })
            .filter(video => {
                if(search) {
                    return video.title.includes(search);  
                }
                return true; 
            })
    }

    update(id, video) {
        this.#database.set(id, video); 
    }

    delete(id) {
        this.#database.delete(id); 
    }
}