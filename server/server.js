const express = require('express')
require("./src/db/connection");
const collection_connection = require("./src/modul/schema");

const app = express()

app.use(express.json())

app.post('/booking' ,async (req, res) => {
    try{
        const moviesRecord = collection_connection(req.body)
        const insertMovie = await moviesRecord.save()
        res.status(201).send(insertMovie)
    }catch(e){
        res.send(e)
        console.log(e)
    }
})

app.get('/booking' ,async (req, res) => {
    try{
        const [data] = await collection_connection.find().sort({_id:-1}).limit(1)
        
        if(data.length == 0){
            res.status(200).json({
                message:"No previous Booking found!",
                status:200,
                data:null
            })
        }else{
            res.status(200).json({
                message:"last booking!",
                status:200,
                data:data
            })
        }
    }catch(e){
        res.send(e)
        console.log(e)
    }
})

app.listen(8080, () => {
    console.log('server is runing on port 8080')
})