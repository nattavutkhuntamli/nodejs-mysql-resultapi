import { pool } from "../db.js"

export const getEmployess = async (req, res) => {
    try {
        const [ rows] = await pool.query("SELECT * FROM employee")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:"Someting goes wrong"
        })
    }
  
}
export const getEmployee = async(req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM employee where id  = ? ", [req.params.id])
        if(rows.length <= 0 ) return res.json({message:"Employee not found"}).status(404)
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:"Someting goes wrong"
        })
    }
    
}

export const createEmployees = async (req, res) => {
    const { name , salary} = req.body
    try {
        const [rows] = await pool.query("INSERT INTO employee  (name,salary) VALUES (?,?)", [name,salary],)
        res.json({
            message:{
                id:rows.insertId,
                name,
                salary
            }
        })
    } catch (error) {
        return res.status(500).json({
            message:"Someting goes wrong"
        })
    }
    
}

export const updateEmployees = async(req, res) => {
    const {id} = req.params.id
    const {name, salary} = req.body
    try {
        const [results] = await pool.query("UPDATE employee SET  name = IFNULL(?,name), salary = IFNULL(?,salary)  where id =? ", [name,salary,id])
        if(results.affectedRows === 0) {
            return res.status(400).json({message:"Employees not found"})
        }
        
        const  [ rows ] = await pool.query("SELECT * FROM  employee where id=? ", [id])
        res.json({
            message:"update employees",
            data:rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            message:"Someting goes wrong"
        })
    }
    
        
}

export const deleteEmployees = async(req, res) => {
    try {
        const [rows] = await pool.query("DELETE  FROM employee where id  = ? ", [req.params.id])
        if(rows.affectedRows <= 0 ) return res.json({message:"Employee not found"}).status(404)
        res.json({
            message:"employee deleted"
        }) 
    } catch (error) {
        return res.status(500).json({
            message:"Someting goes wrong"
        })
    }
    
}