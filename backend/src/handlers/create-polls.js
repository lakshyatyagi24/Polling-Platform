const { response, request } = require("express")

module.exports = (client) => {
    return (request, response) => {
        const data = {
            title: request.body.title,
            choices: request.body.choices.map(choice => ({
                name: choice,
                count: 0
            }))
        }
    }
}