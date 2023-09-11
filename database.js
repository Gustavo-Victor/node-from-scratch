import { randomUUID } from "node:crypto"; 
import { sql } from "./db.js"; 

export class DatabasePostgres {
    
    async create(video) { 
        const id = randomUUID(); 
        const { title, description, duration } = video;
        await sql`INSERT INTO videos (video_id, title, description, duration)
        VALUES (${id}, ${title}, ${description}, ${duration});`; 
    }

    async read(search = '') {
        let videos;
        if (search != '' && search != null && search != undefined && search.length > 0) {
            videos = await sql`SELECT * FROM videos WHERE title ILIKE ${'%' + search + '%'} ;`;
        } else {
            videos = await sql`SELECT * FROM videos;`;
        }  
        return videos; 
    }

    async update(id, video) {
        if ( id == null || id == undefined || String(id).length <= 0 ) return ; 
        const { title, description, duration } = video;
        await sql`UPDATE videos SET 
        title=${title}, description=${description}, duration=${duration} 
        WHERE video_id=${id};`;          
    }

    async delete(id) {
        if ( id == null || id == undefined || String(id).length <= 0 ) return ;
         await sql`DELETE FROM videos WHERE video_id=${id};`;           
    }
}