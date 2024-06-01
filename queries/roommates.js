import axios from 'axios';
import fs from 'fs';
import {v4 as uuidv4} from "uuid";

const urlApi = "https://randomuser.me/api";

//Construir datos del usuario
const addRoommateQuery = async (req, res) => {
    try {
        const data = await axios.get(urlApi);
        const userData = data.data.results[0]
        const id = uuidv4().slice(0, 6);
        const usuario = {
            id,
            nombre: `${userData.name.first} ${userData.name.last}`,
            email: userData.email,
            debe: 0,
            recibe: 0
        };
        const roommateJson = await JSON.parse(fs.readFileSync('../data/roommates.json', 'utf8'));
        roommateJson.roommates.push(usuario)
        fs.writeFileSync('../data/roommates.json', JSON.stringify(roommateJson));
    } catch (error) {
        console.log(error.message)
    }
};

const getRoommatesQuery = async (req, res) => {
    try {
        const roommateJson = await JSON.parse(fs.readFileSync('../data/roommates.json', 'utf8'));    
        return roommateJson   
        //const userData = data.data.results[0]
        } catch (error) {
        console.log(error.message)
    }
};




export {
    addRoommateQuery,
    getRoommatesQuery

}