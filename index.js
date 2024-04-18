import express from "express";
const app = express ()
import axios from 'axios'
const PORT = process.env.PORT || 3000
import router from 'roomRouter'


app.use(express.json())
app.use('/', router)




app.listen (PORT, () =>
console.log(`http://localhost:${PORT}`)
)