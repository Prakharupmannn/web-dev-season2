// write a function to create a users table in your database

// import { Client } from 'pg'

// const client = new Client({
//     connectionString: "postgresql://postgres:wj73Cvkh6i%3F%2A6w%2A@db.efjwnkeijvdrwkhnesev.supabase.co:5432/postgres"
// })

// client.connect()

// async function createUsersTable() {
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

// createUsersTable();





//insert a data into a table
// import { Client } from 'pg'

// async function insertData(username: string, email: string, password: string) {
//     const client = new Client({
//     connectionString: "postgresql://postgres:wj73Cvkh6i%3F%2A6w%2A@db.efjwnkeijvdrwkhnesev.supabase.co:5432/postgres"
//     });

//     try {
//         await client.connect();
//         // const insertQuery = "INSERT INTO users (username , email, password) VALUES ('username2', 'user3@example.com', 'user_password');"; //if we use this then the sql query work and crash the database

//         const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
//         const values = [username, email, password];
//         const res = await client.query(insertQuery , values);
//         console.log('Insertion success:', res);
//     } catch (err) {
//         console.log('Error during the insertion :', err);
//     } finally {
//         await client.end();
//     }
// }

// insertData('username5' , 'user5@gmail.com', 'user_password6').catch(console.error);






//query data - how i can get data through query (email)

// import { Client } from 'pg'

// async function getUser(email:string) {
//     const client = new Client({
//     connectionString: "postgresql://postgres:wj73Cvkh6i%3F%2A6w%2A@db.efjwnkeijvdrwkhnesev.supabase.co:5432/postgres"
//     });

//     try {
//         await client.connect(); //ensure that connection is established

//         const query = 'SELECT * FROM users WHERE email = $1';
//         const values = [email];
//         const result = await client.query(query , values);

//         if(result.rows.length > 0) {
//             console.log('User found:', result.rows[0]);
//             return result.rows[0];
//         } else {
//             console.log('No user found with the given email.');
//             return null;
//         }
        
//     } catch (err) {
//         console.log('Error during the fetching user:', err);
//         throw err;
//     } finally {
//         await client.end();
//     }
// }

// getUser('user3@example.com').catch(console.error);








//---------------------------------------------------





// create address table

// import { Client } from 'pg'

// const client = new Client({
//     connectionString: "postgresql://postgres:wj73Cvkh6i%3F%2A6w%2A@db.efjwnkeijvdrwkhnesev.supabase.co:5432/postgres"
// })

// client.connect()

// async function createAddressTable() {
//     const result = await client.query(`
//         CREATE TABLE address (
//             id SERIAL PRIMARY KEY,
//             user_id INTEGER NOT NULL,
//             city VARCHAR(100) NOT NULL,
//             country VARCHAR(100) NOT NULL,
//             street VARCHAR(100) NOT NULL,
//             pincode VARCHAR(20),
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//             FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
//         );
//     `)
//     console.log(result)
// }

// createAddressTable();




//create data 

import { Client } from 'pg'

async function insertData(city: string, country: string, street: string, pincode: string) {
    const client = new Client({
    connectionString: "postgresql://postgres:wj73Cvkh6i%3F%2A6w%2A@db.efjwnkeijvdrwkhnesev.supabase.co:5432/postgres"
    });

    try {
        await client.connect();

        const insertQuery = "INSERT INTO address (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4 , $5)";
        const values = [1, city, country, street, pincode];
        const res = await client.query(insertQuery , values);
        console.log('Insertion success:', res);
    } catch (err) {
        console.log('Error during the insertion :', err);
    } finally {
        await client.end();
    }
}

insertData('jabalpur', 'India' , 'vijaynagar', '243436').catch(console.error);


