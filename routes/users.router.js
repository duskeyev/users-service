const Router = require('express') 
const router = new Router()
 
const userController = require('../controllers/users.controller')


router.post('/users',userController.createUser)
 
router.get('/users',userController.getAllUsers)
router.put('/users',userController.editUser)
 



module.exports = router