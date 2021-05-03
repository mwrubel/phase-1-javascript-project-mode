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

//set h2 = disclaimer
const closer = document.getElementById('clause')


//fetch: get, then parse to json, then display price in relative currency when button clicked
dollarButton.addEventListener('click', () => {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let r1 = usdResult.innerHTML + ": " + data.bpi.USD.symbol + data.bpi.USD.rate
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
        let r2 = eurResult.innerHTML + ": " + data.bpi.EUR.symbol + data.bpi.EUR.rate
        //debugger
    })
})

poundButton.addEventListener('click', () => {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let r3 = gbpResult.innerHTML + ": " + data.bpi.GBP.symbol + data.bpi.GBP.rate
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