import request from 'request'
import dotenv from 'dotenv'

dotenv.config()

const weatherApiKey = process.env.WEATHER_STACK_API_KEY

export const forecast = ({lat, long}, callback) => {
    const weather_api_url = `https://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${encodeURIComponent(long)},${encodeURIComponent(lat)}&units=s`
    request({url: weather_api_url, json: true}, (error, response) => {
        if(error){
            callback("Unable to connect to the weather service")
        }else if(response.body.error){
            callback("Please enter correct coordinates")
        }else{
            callback(error, {
                feelslike:  response.body.current.feelslike,
                temperature: response.body.current.temperature + " kelvin",
                description: response.body.current.weather_descriptions[0] 
            })
        }        
    })
}