const {Router} = require("express")

const UserController = require("../Controller/usersController")
const UserCrud = new UserController


const router = Router()


router.post('/create', UserCrud.create)
router.delete('/delete/:user_id',UserCrud.delete)
router.get('/read',UserCrud.read)
router.put('/update/:user_id',UserCrud.update)



module.exports = router