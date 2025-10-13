import request from 'request'
import dotenv from 'dotenv'

dotenv.config()

const weatherApiKey = process.env.WEATHER_STACK_API_KEY
const mapboxApiKey  = process.env.MAP_BOX_API_KEY

const url = `https://api.weatherstack.com/current?access_key=${weatherApiKey}&query=33.6996,73.0362&units=s`

request({url: url, json: true}, (error, response) => {
    if(error){
        console.log(response.body.current.weather_descriptions[0]) + " "
        console.log("temperature: " + response.body.current.temperature) + " kelvin"
        console.log("feels like: " + response.body.current.feelslike) + "kelvin"
    }else if(response.body.error){
        console.log("Unable to find location")
    }else{
        console.log("Unable to connect to the weather service")
    }
})



const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/islamabad.json?access_token=${mapboxApiKey}&limit=1`

request({url: url2, json: true}, (error, response) => {
    if(error){
        console.log("Unable to connect to map services")
    }else if(response.body.features.length == 0){
        console.log("Unable to find location. Try another map service")
    }else{
        const long = response.body.features[0].center[0]
        const lat  = response.body.features[0].center[1]
        console.log("long: " + long + ". lat: " + lat)
    }

})