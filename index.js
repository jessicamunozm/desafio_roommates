import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
import roomRouter from './routes/roomRoutes.js'
import gastosRouter from './routes/gastosRoutes.js'

app.use(express.json())
app.use('/', roomRouter)
app.use('/', gastosRouter)

app.listen(PORT, () => {
console.log(`http://localhost:${PORT}`)})