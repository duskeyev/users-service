const Pool = require('pg').Pool

const pool = new Pool(
    {
        user: 'postgres',
        password: 'admin',
        host: 'localhost',
        port: 5432,
        database: 'postgres'
    }
)


/*
    localhost:3000/api/users

[
    {
        "id": 4,
        "username": "bob",
        "email": "boby192@gmail.com"
    },
    {
        "id": 7,
        "username": "tom",
        "email": "tom1232@gmail.com"
    },
  
    
    {
        "id": 20,
        "username": "mike",
        "email": "123mike@gmail.com"
    }
]

*/

module.exports = pool