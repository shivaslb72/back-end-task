const mongoose = require('mongoose')

//Database Connection to MongoServer
setupDB = () => {
  mongoose.connect('mongodb://localhost:27017/backend-task', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
      console.log('Server is connected to db')
    })
}

module.exports = setupDB