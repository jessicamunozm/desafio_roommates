import fs from 'fs';
import { v4 as uuidv4 } from "uuid";

const getGastosQuery = async (req, res) => {
    try {
        const gastosJson = await JSON.parse(fs.readFileSync("../data/gastos.json", 'utf-8'))
        return gastosJson
    } catch (error) {
        
    }}

export {
getGastosQuery
} 