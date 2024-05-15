module.exports = {
    databaseUri: process.env.DATABASE_URI || 'mongodb://localhost/polling-platform',
    port: process.env.PORT || 4000,
    redisConnectionUri: process.env.REDIS_CONNECTION_URI
}