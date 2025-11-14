const express = require('express')
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const pool = require('../utils/db')
const result = require('../utils/result')

const router = express.Router()

router.post('/register', (req, res)=>{
    const {firstname, lastname, email, password, phone, dob} = req.body
      const encryptedPassword = String(cryptoJs.SHA256(password))
  
    const sql = `Insert into users(firstname, lastname, email, password, phone, dob) values(?,?,?,?,?,?);`
 pool.query(
    sql,
    [firstname, lastname, email, encryptedPassword, phone, dob],
    (error, data) => {
      res.send(result.createResult(error, data))
    }
  )})


  router.post('/login', (req, res)=>{
    const {email, password} = req.body
    const sql = `SELECT * from users WHERE email=?`
    pool.query(sql,[email], (data, error)=>{
        if(data !=''){
            const user= sql[0]
            bcrypt.compare(password, user.password)
            .then((result)=>{
                if(result){
                  res.send(result.createResult(result))

                }
                else{
                    res.send(result.createResult(error))
                }
            })
            .catch((error)=>{
                res.send(result.createResult(error))
            })
        }
    })
})
module.exports = router