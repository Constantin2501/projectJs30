let title = 'project name'
let screens = 'Простые, Сложные, Интерактивные'
let screenPrice = 10
let rollback = 100
let fullPrice = 100000
let adaptive = true || false

//alert('Hello') 
//console.log('Bye ')
console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)
console.log(screens.length)
console.log('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей/долларов/гривен/юани' + ' ' + 'и' + ' ' + 'Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/долларов/гривен/юани')
console.log(screens.toLowerCase().split())
console.log(fullPrice * (rollback/100))