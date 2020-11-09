const Express = require('express')
const setupMiddleware = require('./setup/middleware')
const setupDatabase = require('./setup/database')

const app = Express()

setupMiddleware(app)

setupDatabase()
    .then((client) => {
        console.log(client)
        app.listen(4000, () => {
            console.log('Server started on port 4000')
    })
})
.catch(console.error)