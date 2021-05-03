//set api equal to a variable so it can be accessed easily later
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

//set the html buttons equal to variables in JS
const dollarButton = document.getElementById('Dollars')
const euroButton = document.getElementById('Euros')
const poundButton = document.getElementById('Pounds')

//set the html strings = js variables
const usdResult = document.getElementById('USDBTC')
const eurResult = document.getElementById('EURBTC')
const gbpResult = document.getElementById('GBPBTC')

//fetch, then parse to json, then display price in relative currency when button clicked
dollarButton.addEventListener('click', () => {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        usdResult.innerHTML = usdResult + ": " + data.symbol + data.rate
        //.target.querySelector
        //debugger
    })
})

euroButton.addEventListener('click', () => {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        eurResult.innerHTML = eurResult + ": " + data.symbol + data.rate
        //debugger
    })
})

poundButton.addEventListener('click', () => {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        gbpResult.innerHTML = gbpResult + ": " + data.symbol + data.rate
        //debugger
    })
})

/*const dollarButton = document.getElementById('Dollars').onclick = () => {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        //console.log(data)
        alert(data)
        debugger
    })
}
*/