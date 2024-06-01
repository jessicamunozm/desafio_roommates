import express from 'express'
const router = express.Router()
import {home, addRoommate, getRoommates} from '../controller/roomController.js'
import {getGastos} from '../controller/gastosController.js'

router.get("/", home)
router.post('/roommate', addRoommate)
router.get('/roommates', getRoommates)
router.get("/gastos", getGastos)

export default router;