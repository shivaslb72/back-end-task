const express = require('express')
const setupDB = require('./config/database')//Importing database file
const router = require('./config/routes')//Importing router file
const app = express()
const port = 3032

setupDB()
app.use(express.json())
app.use('/', router)

//Running server on PORT 3001
app.listen(port, () => {
 console.log('Server Runing on 3001')
})