const express = require('express')
const userRouter = require('./routes/users.router')
const app = express()
const PORT = process.env.PORT | 3000
  
app.use(express.json())

app.use('/api',userRouter)

app.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT}`);
})