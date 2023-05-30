'use strict'


const title = document.getElementsByTagName('h1')[0]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const cmsCheck = document.querySelector('#cms-open')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

const inputRange = document.querySelector('.rollback input')
const spanRangeValue = document.querySelector('.rollback .range-value')

let mainTotal = document.querySelectorAll('.main-total__item')
let screens = document.querySelectorAll('.screen')
let otherItemsAll = document.querySelectorAll('.other-items')


const appData = {
title: '',
screens: [],
adaptive: true,
isError: false,
screenPrice: 0,
rollback: 0,
fullPrice: 0,
totalCountSum: 0,
servicePercentPrice: 0,
servicePricesPercent: 0,
servicePricesNumber: 0,
servicesPercent: {},
servicesNumber: {},
init: function () {
    this.addTitle()

    startBtn.addEventListener('click', () => {
        this.checkScreens.bind(appData) ()
    })
    buttonPlus.addEventListener('click', () => {
        this.addScreenBlock.bind(appData) ()
    })
    inputRange.addEventListener('input', () => {
        this.rollbackRange.bind(appData) ()
    })
    resetBtn.addEventListener('click', () => {
        this.reset.bind(appData) ()
    })

},
addTitle: function () {
    document.title = title.textContent
},
rollbackRange: function () {
    spanRangeValue.textContent = inputRange.value + '%'
    this.rollback = +inputRange.value
},
reset: function () {
    screens = document.querySelectorAll('.screen')
    mainTotal = document.querySelectorAll('.main-total__item')
    otherItemsAll = document.querySelectorAll('.other-items')


    startBtn.style = 'display: block'
    resetBtn.style = 'display: none'

    this.screenPrice = 0
    this.rollback = 0
    this.fullPrice = 0
    this.totalCountSum = 0
    this.servicePercentPrice = 0
    this.servicePricesPercent = 0
    this.servicePricesNumber = 0
    this.screens = []
    this.servicesPercent = {}
    this.servicesNumber = {}

    mainTotal.forEach((item) => {
        const input = item.querySelector('input')
        input.value = 0
    })

    screens.forEach((screen) => {
        const select = screen.querySelector('select')
        const input = screen.querySelector('input')
        
        select.disabled = false
        input.disabled = false
        select.selectedIndex = 0
        input.value = 0
    })

    otherItemsAll.forEach((items) => {
        const checkBox = items.querySelector('input')

        checkBox.checked = false
    })

    for (let i = 1; i < screens.length; i++) {
        screens[i].remove()
    }

    cmsCheck.checked = false

    inputRange.value = 0
    spanRangeValue.textContent = 0 + '%'
},
blockScreens: function () {
    screens = document.querySelectorAll('.screen')

    screens.forEach((screen) => {
        const select = screen.querySelector('select')
        const input = screen.querySelector('input')
        
        select.disabled = true
        input.disabled = true
    })

    startBtn.style = 'display: none'
    resetBtn.style = 'display: block'

},
checkScreens: function () {
    this.isError = false

    screens = document.querySelectorAll('.screen')
    screens.forEach( (screen) => {
        const select = screen.querySelector('select')
        const input = screen.querySelector('input')

        if (select.value === '' || input.value === '' || input.value == 0) {
            appData.isError = true
        }
    })

    if (!this.isError) {
        this.start()
    }
},
addScreens: function () {
    screens = document.querySelectorAll('.screen')
    
    screens.forEach( (screen, index) => {
        const select = screen.querySelector('select')
        const input = screen.querySelector('input')
        const selectName = select.options[select.selectedIndex].textContent

        this.screens.push({
            id: index,
            name: selectName, 
            price: +select.value * +input.value,
            count: +input.value
        })
    }) 

},
addServices: function () {
    otherItemsPercent.forEach((item) => {
        const check = item.querySelector('input[type=checkbox]')
        const label = item.querySelector('label')
        const input = item.querySelector('input[type=text]')

        if(check.checked) {
            this.servicesPercent[label.textContent] = +input.value
        }
        
    })

    otherItemsNumber.forEach((item) => {
        const check = item.querySelector('input[type=checkbox]')
        const label = item.querySelector('label')
        const input = item.querySelector('input[type=text]')

        if(check.checked) {
            this.servicesNumber[label.textContent] = +input.value
        }
        
    })
},
showResult: function () {
    total.value = this.screenPrice
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
    fullTotalCount.value = this.fullPrice
    totalCountRollback.value = this.servicePercentPrice
    totalCount.value = this.totalCountSum
},
addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true)

    screens[screens.length - 1].after(cloneScreen)
},
addPrices: function() {
    for (let screen of this.screens) {
        this.screenPrice += +screen.price
    }

    for (let key in this.servicesNumber) {
        this.servicePricesNumber += this.servicesNumber[key]
    }

    for (let key in this.servicesPercent) {
        this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
    }

    for (let screen of this.screens) {
        this.totalCountSum += screen.count
    }

    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent
    this.servicePercentPrice =  this.fullPrice - (this.fullPrice * (this.rollback / 100))
    


},
start: function () {
    this.addScreens()
    this.addServices()
    this.addPrices()
    this.showResult()
    this.blockScreens()
}

}

appData.init()



