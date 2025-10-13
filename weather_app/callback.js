setTimeout(() => {
    console.log("Two seconds")
}, 2000)


const names = ["Taimour", "Ali"]
const listNames = names.filter((name) => { return name.length < 4 })
// console.log(listNames)




// 'simulates how a async function would work in real life
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        return data
    }, 2000)
}
console.log(geocode("islamabad"))




// correct way to use callback
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 04
            longitude: 0
        }
        callback(data)
    }, 2000)

}


geocode('Islambad', (data) => {
    console.log(data)
})



const add = (a, b, sum) => {
    setTimeout(() => {
       const c = a+b;
       sum(c)
    }, 2000)
}

add(4, 1, (data) => {
    console.log(data)
})




