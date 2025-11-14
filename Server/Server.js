const express = require('express')
const cors = require('cors')
const app = express();
const userRouter = require('./routes/user')
app.use(cors())
app.use(cors({
  origin: 'http://localhost:5174' 
}));
app.use(express.json())
app.use('/user', userRouter )
const port=4000
app.listen(port, ()=>{
    console.log(`Server listening on ${port}`)
})