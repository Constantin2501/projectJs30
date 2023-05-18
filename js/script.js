const h1 = document.getElementsByTagName('h1')
console.log(h1[0]);
const handlerBtn = document.getElementsByClassName("handler_btn")
console.log(handlerBtn);
const screenBtn = document.querySelector('.screen-btn')
console.log(screenBtn);
const percent = document.querySelectorAll('.percent')
console.log(percent);
const number = document.querySelectorAll('.number')
console.log(number);
const inputRange = document.querySelector('.rollback input[type="range"]')
console.log(inputRange);
const spanRange = document.querySelector('.rollback span.range-value')
console.log(spanRange);
const totalInput = document.getElementsByClassName('total-input')
for (let index = 0; index < totalInput.length; index++) {
    const element = totalInput[index];
    console.log(element);
}
let screenBlock = document.querySelectorAll('.screen')
console.log(screenBlock);


// let title
// let screens
// let screenPrice
// let adaptive
// let rollback = 10
// let fullPrice
// let servicePercentPrice
// let allServicePrices
// let service1
// let service2


const appData = {
title: '',
screens: [],
screenPrice: 0,
adaptive: true,
rollback: 10,
fullPrice: 0,
servicePercentPrice: 0,
allServicePrices: 0,
services: {},
asking: function () {
    do {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
      } while (appData.isNumber(appData.title))

    for (let i = 0; i < 2; i++) {
        let price = 0
        let name

        do {
            name = prompt('Какие типы экранов нужно разработать?')
          } while (appData.isNumber(name))

        do { 
            price = prompt('Сколько будет стоить данная работа?')
        } while (!appData.isNumber(price))

        appData.screens.push({id: i, name: name, price: price})
    }

    for (let i = 0; i < 2; i++) {
        let name
        let price = 0

        do {
            name = prompt('Какой дополнительный тип услуги нужен?')
          } while (appData.isNumber(name))

        do {
            price = prompt('Сколько это будет стоить?')
        } while (!appData.isNumber(price))

        appData.services[name] = +price
    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?')
},
addPrices: function() {
    for (let screen of appData.screens) {
        appData.screenPrice += +screen.price
    }

    for (let key in appData.services) {
        appData.allServicePrices += appData.services[key]
    }
},
isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
},
getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices
},
getServicePercentPrices: function () {
    appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
},
getTitle: function () {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().toLowerCase().slice(1)
},
getRollbackMessage: function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%'
    } else if (price < 15000 && price >= 0) {
        return 'Скидка не предусмотрена'
    } else {
        return 'что то пошло не так'
    }
},
logger: function () {
   console.log(appData.fullPrice)
   console.log(appData.servicePercentPrice)
   console.log(appData.screens)
},
start: function () {
    appData.asking()
    appData.addPrices()
    appData.getFullPrice()
    appData.getServicePercentPrices()
    appData.getTitle()

    appData.logger()
}

}

// appData.start()



