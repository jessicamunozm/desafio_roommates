import fs from 'fs'
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'

const home = (req, res) => {
    res.send('ruta desde controller')
}



// const showRoommate = (req, res) => {
//     const roommateJson = JSON.parse(fs.readFileSync("../data/roommates.json", "utf-8"))
//     res.send(roommateJson)
// }

// const addRoommate = (req, res) => {
//     const id = uuidv4().slice(0, 4)
//     const {nombre, debe, recibe} = req.body
//     const roommate = {id, nombre, debe, recibe}
//     const roommateJson = JSON.parse(fs.readFileSync("../data/roommates.json", "utf-8"))
//     const roommates = roommateJson
//     roommates.push(roommate)
//     fs.writeFileSync('../data/roommates.json', JSON.stringify(roommates))
//     res.send('Roommate agregado')
// }

// export {
//     home,
//     showRoommate,
//     addRoommate
// }