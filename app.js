const express = require('express')
const path = require('path')

const app = express()

//sends a file to the user
app.get('/', (req, res) => {
    res.sendFile(__dirname + path.sep + "index.html")
})

app.listen(8000, (error) => {
    if(error){
        console.error('An error occurred... ' + e)
    }
    else{
        console.log('server listening')
    }
})
