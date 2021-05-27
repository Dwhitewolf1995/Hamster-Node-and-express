const express = require('express')
const app = express()

const path = require('path') 
const staticFolder = path.join(__dirname, 'static')//static mapp

const HamsterObject = require('./routes/HamsterObject')

const PORT = 2000

app.use('/HamsterObject', HamsterObject) // rest api for HamsterObject



//=======================================================================================//
//Static mapp


app.use(express.static(staticFolder))


//=======================================================================================//



app.get('/', (req, res) => {
    console.log('GET /');
    res.send('Yes i am here')
})



app.get('/secretfile', (req, res) => {
    console.log('GET /secretfile');
    res.send('You found mine secret file')
})




//=======================================================================================//
//Стартует сервер


app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
})

