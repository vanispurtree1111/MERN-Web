require('dotenv').config()

const express = require('express')
const workoutRoutes =require('./routes/workouts')
//express app
const app = express()

//express app


//middleware
app.use(express.json())

app.use((req,res,next) => {
 console.log(req.path , req.method)
 next()
})

//routes  test api  
// app.get('/',(req,res)=>{
//  res.json({msg: 'Welcome to the app'})
// })

//routes
app.use('/api/workouts',workoutRoutes)

//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('listening on port', process.env.PORT)
})

