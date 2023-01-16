import express  from 'express'
import {
     getEmployess , getEmployee, createEmployees , updateEmployees , deleteEmployees
} from "../controllers/employees.controller.js"

const router = express.Router()

router.get('/employees', getEmployess)
router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees)

router.put('/employees/:id', updateEmployees)

router.delete('/employees/:id', deleteEmployees)

export default  router