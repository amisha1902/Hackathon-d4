const mysql = require('mysql2');
const pool=mysql.createPool({
      host:"localhost",
      user:"d4-92926-Amisha",
      password:"manager",
      database:"hacakthon"
}
)
module.exports= pool