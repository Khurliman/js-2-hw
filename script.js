var age = +prompt('Введите свой возраст')
if(age > 0 && age <= 18) {
    alert('Вы ещё молоды. Вам нужно учиться!');
}else if(age > 18 && age <= 50) {
    alert('Вам нужно работать!');
}else if(age > 50 && age <= 59) {
    alert('Вам скоро на пенсию!');
}else if(age > 59 && age <= 150) {
    alert('Вы пенсионер.');
}else {
    alert('Что-то пошло не так -_-')
}

var time = +prompt('Который час?')
switch (time) {
    case 0:
        alert('Полночь.')
        break;
    case 1:
        alert('Час ночи.')
        break;
    case 2:
        alert('Два часа ночи.')
        break;
    case 3:
        alert('Три часа ночи.')
        break;
    case 4:
        alert('Четыре часа утра.')
        break;
    case 5:
        alert('Пять часов утра.')
        break;
    case 6:
        alert('Шесть часов утра.')
        break;
    case 7:
        alert('Семь часов утра.')
        break;
    case 8:
        alert('Восемь часов утра.')
        break;
    case 9:
        alert('Девять часов утра.')
        break;
    case 10:
        alert('Десять часов утра.')
        break;
    case 11:
        alert('Одиннадцать часов утра.')
        break;
    case 12:
        alert('Полдень.')
        break;
    case 13:
        alert('Час дня.')
        break;
    case 14:
        alert('Два часа дня.')
        break;
    case 15:
        alert('Три часа дня.')
        break;
    case 16:
        alert('Четыре часа дня.')
        break;
    case 17:
        alert('Пять часов дня.')
        break;
    case 18:
        alert('Шесть часов вечера.')
        break;
    case 19:
        alert('Семь часов вечера.')
        break;
    case 20:
        alert('Восемь часов вечера.')
        break;
    case 21:
        alert('Девять часов вечера.')
        break;
    case 22:
        alert('Десять часов вечера.')
        break;
    case 23:
        alert('Одиннадцать часов ночи.')
        break;
    case 24:
        alert('Полночь.')
        break;
    case NULL: 
        alert('Вы ничего не ввели.')
        break;
    default:
        alert('Вы ввели неправильно!')
        break;
}

var num1 = +prompt('Введите первое число');
var num2 = +prompt('Введите второе число');
var num3 = +prompt('Введите третье число');
var num;
if((num1 > num2 && num1 < num3)||(num1 > num3 && num1 < num2)) {
    num = num1;
}else if((num2 > num1 && num2 < num3)||(num2 > num3 && num2 < num1)) {
    num = num2;
}else if((num1 > num2 && num1 < num3)||(num1 > num3 && num1 < num2)) {
    num = num1;
}else {
    alert('Что-то пошло не так.')
}
alert('Среднее число ' + num)