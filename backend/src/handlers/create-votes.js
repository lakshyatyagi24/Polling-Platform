const { promisify } = require('util')

module.exports = (db, redisDb) => {
    const saddAsync = promisify(redisDb.sadd).bind(redisDb)

    return async (request, response) => {
        const result = await db.collection('polls').updateOne({
            _id: request.params.poll,
            'choices._id': request.body.choice
        }, {
            $inc: {
                'choices.$.count': 1
            }
        })

        await saddAsync(request.params.poll, request.body.ip)

        return response.json({
            message: 'Vote has been registered.'
        })
    }
}