let title
let screens
let screenPrice
let adaptive
let rollback = 10
let fullPrice
let servicePercentPrice
let allServicePrices
let service1
let service2



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

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькуятор верстки')
    screens = prompt('Какие типы экранов нужно разработать', 'Простые, Сложные')

    do { 
        screenPrice = prompt('Сколько будет стоить данная работа?')
    } while (!isNumber(screenPrice))

    adaptive = confirm('Нужен ли адаптив на сайте?')
}

const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
        }

        do {
            sum = +prompt('Сколько это будет стоить?')
        } while (!isNumber(sum))

        sum += sum
    }

    return sum
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

asking()
title = getTitle()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)


console.log('allServicePrices', allServicePrices)

console.log(getRollbackMessage(fullPrice))
console.log(screens.length)
console.log(servicePercentPrice)

console.log('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей/долларов/гривен/юани' + ' ' + 'и' + ' ' + 'Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/долларов/гривен/юани')
