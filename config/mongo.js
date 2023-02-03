const mongoose = require('mongoose');

mongoose.set('strictQuery', true)
mongoose.set('strictPopulate', false)
mongoose.connect(process.env.MONGO_DATABASE_URL, { useNewUrlParser: true, dbName: 'user-logs' })

mongoose.connection.once('connected', () => {
    console.log('MongoDB Connected')
})

mongoose.connection.on('error', (error) => {
    console.log('MongoDB error = ' + error)
    process.exit(1)
})
