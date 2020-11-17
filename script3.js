

var num1 = +prompt ('Введите первое число')
var num2 = +prompt ('Введите второе число')
var num3 = +prompt ('Введите третье число')

if(num2 < num1 && num1 < num3 || num3 < num1 && num1 < num2) {
    alert('Среднее число ' + num1)
}
else if (num1 < num2 && num2 < num3 || num3 < num2 && num2 < num1) {
    alert('Среднее число ' + num2)
}
else if(num1 < num3 && num3 < num2 || num2 < num3 && num3 < num1) {
    alert('Среднее число ' + num3)
}
else {
    alert('Что-то не так')
}