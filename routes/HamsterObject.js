const getDB = require('../DB') //SC?
const dataBase = getDB()

const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    const ref = dataBase.collection('HamsterObject') // SC?

    const snapshot = await ref.get()

    if(snapshot.empty) {
        res.send([])
        return
    }

    let object = []
snapshot.forEach(doc => {
    const data = doc.data()
    data.id = doc.id
    object.push( data ) 
   })
   res.send(object)
})


module.exports = router