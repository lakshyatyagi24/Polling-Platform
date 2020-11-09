const { response, request } = require("express")

module.exports = (client) => {
    return (request, response) => {
        response.json({
            message: 'It works.'
        })
    }
}