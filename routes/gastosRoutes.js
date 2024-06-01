import express from "express";
const router = express.Router();
import { getGastos } from "../controller/gastosController.js"; 

router.get('/gastos', getGastos)

export default router 