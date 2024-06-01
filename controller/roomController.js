import path from "path";
const __dirname = import.meta.dirname;
import { addRoommateQuery, getRoommatesQuery } from "../queries/roommates.js";

const home = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

const addRoommate = async (req, res) => {
    try {
        const result = await addRoommateQuery();
        res.json(result);
    } catch (error) {
        console.log(error.message)
    }
}

const getRoommates = async (req, res) => {
    try {
        const result = await getRoommatesQuery();
        res.send('Obtener datos');
    } catch (error) {
        console.log(error.message)
    }
}

export {
    home,
    addRoommate,
    getRoommates
}