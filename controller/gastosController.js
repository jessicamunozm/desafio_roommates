import { getGastosQuery } from "../queries/gastos.js";

const getGastos = async (req, res) => {
try {
    const results = await getGastosQuery()
    res.json(results)
} catch (error) {
    console.log(error.message)  }}

export { getGastos }