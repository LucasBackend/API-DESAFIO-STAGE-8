const {Router} = require("express")

const movieController = require("../Controller/moviesController")
const movieCrud = new movieController


const router = Router()


router.post('/create/:user_id', movieCrud.created)
router.delete('/delete/:note_id', movieCrud.delete)
router.post('/show/:user_id', movieCrud.show)




module.exports = router