import { sql } from "./db.js";

sql`
    CREATE TABLE videos ( 
        video_id VARCHAR PRIMARY KEY, 
        title VARCHAR(60) NOT NULL UNIQUE, 
        description TEXT, 
        duration INTEGER NOT NULL
    ); 
`.then(resp => {
    console.log('Table created succesfully!'); 
})