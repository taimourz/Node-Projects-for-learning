import request from 'request'
import dotenv from 'dotenv'
import {geocode} from './utils/geoencode.js'
import {forecast} from './utils/forecast.js'

dotenv.config()

const location = process.argv[2]
if(location){
    geocode(location, (error, {latitude, longitude, place_name}) => {
        if(error){
            return console.log(error)
        }
    
        forecast({lat: latitude, long: longitude}, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
    
            console.log(place_name)
            console.log(forecastData)
        })
    })
}else{
    console.log("please provide a valid location")
}


