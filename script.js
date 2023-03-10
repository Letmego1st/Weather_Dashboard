const apiKey = "bc7696a82d6df78862740451e4d87874";
let cityName = "Corona"
const citySearchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`

async function getWeatherData() {
    const response = await fetch(citySearchUrl)
    const initialCityData = await response.json()
    const lat = initialCityData.city.coord.lat
    const lon = initialCityData.city.coord.lon
    
    const finalCityData = await geoWeatherData(lat, lon)
    console.log(finalCityData)

}
getWeatherData()

async function geoWeatherData(lat, lon) {
    const coordSearchUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    const response = await fetch(coordSearchUrl)
    const coordCityData = await response.json()
    return coordCityData
} 
