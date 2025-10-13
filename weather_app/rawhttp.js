import dotenv from 'dotenv'
import https from 'https'

dotenv.config()

const weatherApiKey = process.env.WEATHER_STACK_API_KEY

const url = `https://api.weatherstack.com/current?access_key=${weatherApiKey}&query=33.6996,73.0362&units=s`

const request = https.request(url, (response) => {
    let data = ''
    
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})


request.on('error', (error) => {
    console.log('An error' + error)
})

request.end()