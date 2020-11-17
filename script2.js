

var number = +prompt('Введите время')
if(number >= 2 && number <= 4) {
    alert(number + ' часа ночи')
}
else if(number == 1) {
    alert(number + ' час ночи')
}
else if(number == 5) {
    alert(number + ' часов ночи')
}
else if(number == 24) {
    alert('12 часов ночи')
}
else if(number >= 6 && number <= 11) {
    alert(number + ' часов утра')
}
else if(number == 12) {
    alert(number + ' часов дня')
}
else if(number == 13) {
    alert(1 + ' час дня')
}
else if(number == 14) {
    alert(2 + ' часа дня')
}
else if(number == 15) {
    alert(3 + ' часа дня')
}
else if(number == 16) {
    alert(4 + ' часа дня')
}
else if(number == 17) {
    alert(5 + ' часов дня')
}
else if(number == 18) {
    alert(6 + ' часов вечера')
}
else if(number == 19) {
    alert(7 + ' часов вечера')
}
else if(number == 20) {
    alert(8 + ' часов вечера')
}
else if(number == 21) {
    alert(9 + ' часов вечера')
}
else if(number == 22) {
    alert(10 + ' часов вечера')
}
else if(number == 23) {
    alert(11 + ' часов вечера')
}
else {
    alert('Это не время')
}