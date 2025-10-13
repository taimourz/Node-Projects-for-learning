import request from 'request'
import dotenv from 'dotenv'
import {geocode} from './utils/geoencode.js'
import {forecast} from './utils/forecast.js'

dotenv.config()

geocode("Islamabad", (error, data) => {
    console.log("Error: ", error)
    console.log("data: ", data)
})

forecast({lat: -75.7088, long: 44.1545}, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
