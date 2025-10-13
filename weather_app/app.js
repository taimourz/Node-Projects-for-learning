import request from 'request'

const url = "https://api.weatherstack.com/current?access_key=48973970cc42361bbf431dbea7c07e05&query=33.6996,73.0362&units=s"

request({url: url, json: true}, (error, response) => {
    console.log("temperature: " + response.body.current.temperature) + " kelvin"
    console.log("feels like: " + response.body.current.feelslike) + "kelvin"
})