let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать')
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')
let rollback = 100
let fullPrice
let servicePercentPrice
let allServicePrices


const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%'
    } else if (price < 15000 && price >= 0) {
        return 'Скидка не предусмотрена'
    } else {
        return 'что то пошло не так'
    }
}

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}

function getFullPrice() {
    return screenPrice + allServicePrices
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().toLowerCase().slice(1)
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

title = getTitle()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()


console.log(getRollbackMessage(fullPrice))

console.log(screens)
console.log(servicePercentPrice)
