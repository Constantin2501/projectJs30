const title = document.getElementsByTagName('h1')[0]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')

const startBtn = document.getElementsByClassName('handler_btn')[0]

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]
// const buttonPlus = document.getElementsByClassName(".screen-btn")
// const percent = document.querySelectorAll('.percent')
// const number = document.querySelectorAll('.number')
// const inputRange = document.querySelector('.rollback input[type="range"]')
// const spanRange = document.querySelector('.rollback span.range-value')
// const totalInput = document.getElementsByClassName('total-input')

let screens = document.querySelectorAll('.screen')


const appData = {
title: '',
screens: [],
screenPrice: 0,
adaptive: true,
rollback: 10,
fullPrice: 0,
isError: false,
servicePercentPrice: 0,
servicePricesPercent: 0,
servicePricesNumber: 0,
servicesPercent: {},
servicesNumber: {},
init: function () {
    appData.addTitle()

    startBtn.addEventListener('click', appData.checkScreens)

    buttonPlus.addEventListener('click', appData.addScreenBlock)
},
addTitle: function () {
    document.title = title.textContent
},
checkScreens: function () {
    screens = document.querySelectorAll('.screen')
    screens.forEach(function (screen) {
        const select = screen.querySelector('select')
        const input = screen.querySelector('input')

        if (select.value === '' || input.value === '' || input.value === 0) {
            appData.isError = true
        } 
        
    })

},
addScreens: function () {
    screens = document.querySelectorAll('.screen')
    
    screens.forEach(function (screen, index) {
        const select = screen.querySelector('select')
        const input = screen.querySelector('input')
        const selectName = select.options[select.selectedIndex].textContent

        appData.screens.push({
            id: index,
            name: selectName, 
            price: +select.value * +input.value
        })
    }) 

    console.log(appData.screens);
},
addServices: function () {
    otherItemsPercent.forEach(function(item) {
        const check = item.querySelector('input[type=checkbox]')
        const label = item.querySelector('label')
        const input = item.querySelector('input[type=text]')

        if(check.checked) {
            appData.servicesPercent[label.textContent] = +input.value
        }
        
    })

    otherItemsNumber.forEach(function(item) {
        const check = item.querySelector('input[type=checkbox]')
        const label = item.querySelector('label')
        const input = item.querySelector('input[type=text]')

        if(check.checked) {
            appData.servicesNumber[label.textContent] = +input.value
        }
        
    })
},
showResult: function () {
    total.value = appData.screenPrice
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
    fullTotalCount.value = appData.fullPrice
},
addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true)

    screens[screens.length - 1].after(cloneScreen)
},
addPrices: function() {
    for (let screen of appData.screens) {
        appData.screenPrice += +screen.price
    }

    for (let key in appData.servicesNumber) {
        appData.servicePricesNumber += appData.servicesNumber[key]
    }

    for (let key in appData.servicesPercent) {
        appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
    }

    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent

},
getServicePercentPrices: function () {
    appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
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
    appData.addScreens()
    appData.addServices()
    appData.addPrices()
    // appData.getServicePercentPrices()

    // appData.logger()
    appData.showResult()
}

}
console.log(appData);
appData.init()



