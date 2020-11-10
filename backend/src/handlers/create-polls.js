const { v4 } = require("uuid")

module.exports = (client) => {
    return (request, response) => {
        const data = {
            _id: v4(),
            title: request.body.title,
            choices: request.body.choices.map(choice => ({
                name: choice,
                count: 0,
                _id: v4()
            }))
        }
        return response.json(data)
    }
}