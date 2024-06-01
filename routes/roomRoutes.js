import express from 'express'
import axios from 'axios'
import {home, addRoommate, getRoommates} from '../controller/roomController.js'

const router = express.Router()

router.get('/', home)
router.post('/roommate', addRoommate)
router.get('/roommates', getRoommates)
router.get('/gastos')


// router.get('/roommates', showRoommate)

// router.post('/roommate', addRoommate)

// app.get('/roomate', async (req, res) => {
//     const {data} = await axios.get ('http://randomuser.me.api')
//     console.log(data)
//     res.send()
//     })

export default router