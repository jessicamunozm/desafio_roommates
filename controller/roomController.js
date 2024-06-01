import path from "path"
import {addRoommateQuery, getRoommatesQuery, calculateDeudas} from "../queries/roommates.js"
const __dirname = import.meta.dirname

const home = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"))
}

const addRoommate = async (req, res) => {
    try {
        const result = await addRoommateQuery()
        calculateDeudas()
        res.redirect('/')
    } catch (error) {
        console.log(error.message)
    }
}

const getRoommates = async (req, res) => {
    try {
        const results = await getRoommatesQuery()
        res.json(results)
    } catch (error) {
        console.log(error.message)
    }
}


export {home, addRoommate, getRoommates}