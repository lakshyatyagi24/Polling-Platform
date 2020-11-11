const Express = require('express')
const setupRadis = require('./setup/redis')
const setupRouter = require('./setup/router')
const setupMiddleware = require('./setup/middleware')
const setupDatabase = require('./setup/database')

const app = Express()

setupMiddleware(app)

async function start() {
    const db = await setupDatabase()
    const redisDb = await setupRadis()

    setupRouter(app, db, redisDb)
    //console.log(client)
    app.listen(4000, () => {
        console.log('Server started on port 4000')
}) 
}

start().catch(console.error)