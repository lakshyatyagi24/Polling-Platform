const Mongodb = require('mongodb')

const uri = 'mongodb://localhost/polling-platform'

module.exports = (app) => {
    const client = new Mongodb.MongoClient(uri)

    return client.connect()
}