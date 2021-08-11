//////CODE TO CREATE OBJECT OF CITIES AND CORRESPONDING ZIPCODES


let cityArray = [];

let zipcodeArray = []


zipcodeArray.forEach(zipcode => {
    // console.log(zipcodes.lookup(zipcode))
    //console.log(zipcodes.lookup(zipcode))
    let city = zipcodes.lookup(zipcode).city;
    console.log(zipcodes.lookup(zipcode))
    if(cityArray.indexOf(city) === -1) {
        cityArray.push(city)
    }
})

let locations = {};

cityArray.forEach(city => {
    locations[city] = []
})

zipcodeArray.forEach(zipcode => {
    let city = zipcodes.lookup(zipcode).city
    locations[city].push(zipcode)
})

console.log(locations)