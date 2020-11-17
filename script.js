

var number = +prompt ('Введите свой возраст')
if(number > 0 && number <= 18) {
    alert('Вы еще молоды, вам нужно учиться')
}
else if(number >= 19 && number <= 50) {
    alert('Вам нужно работать')
}
else if(number >= 51 && number <= 59) {
    alert('Вам скоро на пенсию')
}
else if(number >= 60 && number <= 150) {
    alert('Вы пенсионер')
}
else {
    alert('Что-то пошло не так')
}