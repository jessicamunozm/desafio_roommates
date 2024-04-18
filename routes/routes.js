import express from 'express'
const router = express.Router()
import path from 'path'
const __dirname = import.meta.dirname
import axios from 'axios'


router.get('/', (req, res) => {
res.sendFile(path.join(__dirname './views/index.html'))
})


// router.get('/roommates', showRoommate)

// router.post('/roommate', addRoommate)

app.get('/roomate', async (req, res) => {
    const {data} = await axios.get ('http://randomuser.me.api')
    console.log(data)
    res.send()
    })

export default router