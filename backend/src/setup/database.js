const Mongodb = require('mongodb')
const Config = require('../config')

const uri = 'mongodb://localhost/polling-platform'

module.exports = async () => {
    const client = new Mongodb.MongoClient(Config.databaseUri, {
        useUnifiedTopology: true
    })

    await client.connect()
    
    return client.db()
}