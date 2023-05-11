let title
let screens
let screenPrice
let rollback = 100
let fullPrice
let adaptive = true || false
let service1
let servicePrice1
let service2
let servicePrice2
let servicePercentPrice


title = prompt('Как называется ваш проект?')
screens = prompt('Какие типы экранов нужно разработать')
screenPrice = +prompt('Сколько будет стоить данная работа?')
adaptive = confirm('Нужен ли адаптив на сайте?')
service1 = confirm('Нужен service1?')
if (service1 === true) {
    servicePrice1 = +prompt('Сколько это будет стоить?')
} else servicePrice1 = 0

service2 = confirm('Нужен service2?')
if (service2 === true) {
    servicePrice2 = +prompt('Сколько это будет стоить?')
} else servicePrice2 = 0

fullPrice = screenPrice + servicePrice1 + servicePrice2

if (fullPrice >= 10000) {
    fullPrice = fullPrice - (fullPrice / 100 * 10) 
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    fullPrice = fullPrice - (fullPrice / 100 * 5)
} else if (fullPrice < 15000 && fullPrice >= 0) {
    console.log('Скидка не предусмотрена')
} else if (fullPrice < 0) {
    console.log('что то пошло не так')
}

servicePercentPrice = Math.ceil(fullPrice - rollback)

//alert('Hello') 
//console.log('Bye ')
//console.log(typeof title)
//console.log(typeof fullPrice)
//console.log(typeof adaptive)
//console.log(screens.length)
//console.log('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей/долларов/гривен/юани' + ' ' + 'и' + ' ' + 'Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/долларов/гривен/юани')
//console.log(screens.toLowerCase().split())
//console.log(fullPrice * (rollback/100))

console.log(title)
console.log(screens)
console.log(screenPrice)
console.log(adaptive)
console.log(service1)
console.log(servicePrice1)
console.log(service2)
console.log(servicePrice2)
console.log(fullPrice)
console.log(servicePercentPrice)