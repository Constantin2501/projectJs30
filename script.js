let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать')
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')
let rollback = 10
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))


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



showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)


console.log(getRollbackMessage(fullPrice))
// console.log(typeof title)
// console.log(typeof screenprice)
// console.log(typeof adaptive)

// console.log(screens.length)
// console.log('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей/долларов/гривен/юани' + ' ' + 'и' + ' ' + 'Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/долларов/гривен/юани')
// console.log(screens.toLowerCase().split())
// console.log(fullPrice * (rollback/100))


// console.log(servicePercentPrice)