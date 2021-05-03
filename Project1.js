//set api equal to a variable so it can be accessed easily later
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

//set the html buttons equal to variables in JS
const dollarButton = document.getElementById('Dollars')
const euroButton = document.getElementById('Euros')
const poundButton = document.getElementById('Pounds')

//fetch, then parse to json, then display price in relative currency when button clicked
dollarButton.addEventListener('click', () => {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
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
        console.log(data)
        //debugger
    })
})

poundButton.addEventListener('click', () => {
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
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