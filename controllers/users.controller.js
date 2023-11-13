const db = require('../db')


class UserController {
    async createUser(req,res) {
        const {username, email} = req.body
        const newUser = await db.query("insert into users(username,email) values ($1,$2) returning *", [username,email])
        
        res.json( newUser.rows[0] )
        const userId = newUser.rows[0].id
         
        try {
            const response = await fetch('http://localhost:8080/api/user-actions', {
                method: 'POST',
                body: JSON.stringify({ userId: userId , action : 'create'}),
                headers: { 'Content-Type': 'application/json' },
                });
            
            const data = await response.json();
            console.log('Событие создания пользователя отправлено в сервис истории действий:', data);
        } catch (error) {
            console.error('Ошибка при отправке события создания пользователя:', error);
        }
           
        
    }
    async getAllUsers(req,res) {
        const users = await db.query("select * from users")
        res.json(users.rows) 
         
    }
    
    async editUser(req,res) {
        const {id,username,email} = req.body
        const editedUser = await db.query("update users set username=$1, email=$2 where id=$3 returning *", [username,email,id] )
        res.json(editedUser.rows[0])
        const userId = editedUser.rows[0].id
        try {
            const response = await fetch(`http://localhost:8080/api/user-actions`, {
              method: 'POST',
              body: JSON.stringify({ userId: userId , action :'update'}),
              headers: { 'Content-Type': 'application/json' },
            });
        
            const data = await response.json();
            console.log('Событие изменения пользователя отправлено в сервис истории действий:', data);
          } catch (error) {
            console.error('Ошибка при отправке события изменения пользователя:', error);
          }
    }
    
     
     
}


module.exports = new UserController