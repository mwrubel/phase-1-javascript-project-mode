//set api equal to a variable so it can be accessed easily later
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'


//set the html buttons equal to variables in JS
const dollarButton = document.getElementById('Dollars')
const euroButton = document.getElementById('Euros')
const poundButton = document.getElementById('Pounds')


//set the html strings = js variables
let usdResult = document.getElementById('USDBTC')
let eurResult = document.getElementById('EURBTC')
let gbpResult = document.getElementById('GBPBTC')


//fetch: get, then parse to json, then display price in relative currency when button clicked
dollarButton.addEventListener('click', () => {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        //check to see if relative h1 html element hasn't already been changed, if so display bitcoin price
        if (usdResult.innerHTML="Bitcoin price in USD")
        usdResult.innerHTML = usdResult.innerHTML + ": " + data.bpi.USD.symbol + data.bpi.USD.rate
    })
})


euroButton.addEventListener('click', () => {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        if (eurResult.innerHTML="Bitcoin price in EUR")
        eurResult.innerHTML = eurResult.innerHTML + ": " + data.bpi.EUR.symbol + data.bpi.EUR.rate
    })
})


poundButton.addEventListener('click', () => {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        if (gbpResult.innerHTML="Bitcoin price in GBP")
        gbpResult.innerHTML = gbpResult.innerHTML + ": " + data.bpi.GBP.symbol + data.bpi.GBP.rate   
    })
})