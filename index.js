/* 1. В переменную x записывается число, введенное пользователем в диалоговое окно. 
Проверить и вывести на экран, x – отрицательное число, положительное или ноль.*/
//let x = +prompt('Add number', '');
// Я не совсем понял задачу, но предпологая что должно быть так:
//1-й вариант
/*alert(-x);
alert(x);
alert(x * 0);*/
//2-й вариант
/*if (x > 0) {
  alert(x);
} else if (x < 0) {
  alert(x);
} else {
  alert(0);
}*/
//3-й вариант
/*let num1 = (x < 0) ? 'Отрицательное число' :
   (x > 0) ? 'Положительное число' :
      'Ноль';

alert( num1 );*/
//=============
/* 2. Создайте три переменные с любыми числовыми значениями. 
Используя условный оператор  и не используя логические, 
найдите минимальное число и отобразите на экране имя переменной и ее значение.*/
/*let num2 = 5;
let num3 = 2;
let num4 = 70;*/
// Вариант 1
/*if (num2 < num3 && num2 < num4) {
    alert(`num2=${num2} `);
} else if (num3 < num4 && num3 < num2) {
    alert(`num3=${num3} `);
} else {
    alert(`num4=${num4} `);
}*/
// Вариант 2
/*let resaltNum = (num2 < ((num3 < num4) ? num3 : num4)) ? num2 : (num3 < num4) ? num3 : num4;
alert(resaltNum);*/
// Вариант 3
/*if (num2 < num3) {
    if (num2 < num4) {
        console.log(nam2)
    } 
} else if (num2 < num4) {
    if (num2 < num3) {
        console.log(num2)
    }
}

if (num3 < num2) {
    if (num3 < num4) {
        console.log(num3)
    }
} else if (num3 < num4) {
    if (num3 < num2) {
        console.log(num3)
    }
}

if (num4 < num2) {
    if (num4 < num3) {
        console.log(num4)
    }
} else if (num4 < num3) {
    if (num4 < num2) {
        console.log(num4)
    }
} */
//===============
/* 3. У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. 
В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. 
С помощью условного оператора определите ваши возможности и отобразите на экране в alert.*/
/*let friend1 = +prompt('Сколько бабла у первого кориша?', '')
let friend2 = +prompt('Сколько бабла у второго кориша?', '')
if (friend1 + friend2 >= 2000) {
  alert( 'Билет на остров любви' );
} else {
  alert( 'Поход в тошниловку' );
}*/
// или
/*let result = (friend1 + friend2 >= 2000) ? 'Билет на остров любви' : 'Поход в тошниловкуо';
alert(result);*/
//==============
/* 4. В переменную age запишите возраст человека. 
Если значение больше или равно 20 и меньше 27, в alert выводится “Вислати повiстку”.*/
/*let ageSol = +prompt('How old are you?', '');
if (ageSol >= 20 && ageSol <= 27) {
   alert(`Вислати повiстку`);
} else {
   alert(`Feel free`);
}*/
//=============
/* 5. Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. 
Какая маршрутка приехала – определяется в prompt. 
Если ваша, то вы едете домой, в противном случае – ожидаете.*/
/*let numBus = +prompt('What is the bus number?', '');
if ((numBus === 7) || (numBus === 225) || (numBus === 255)) {
   alert('Welcome on board!');
} else {
   alert('Wait some more');
}*/
//============
/* 6. В переменную day записан текущий день недели. 
Если это не суббота и не воскресенье, выведите в alert сообщение о необходимости идти на работу.*/
/*let dayWeek = prompt('What day today?', '');
let res = dayWeek === 'Saturday' ? 'home' : 
   dayWeek === 'Sunday' ? 'home' : 'Go to work!'
alert(res);*/
//============
/* 7. Запросите из prompt переменные x и y значения от -20 до 20. 
Если переменная x равна или меньше 1, а переменная y больше или равна 3 или меньше 0, 
то выведите сумму этих переменных, иначе выведите 'Неверно!'.*/
/*let varX = +prompt('-20 til 20', '');
let varY = +prompt('-20 til 20', '');
if ((+(varX <= 1) + +(varY >= 3)) == 2) {
   alert(varX + varY);
} else {
   if ((+(varX <= 1) + +(varY < 0)) == 2) {
      alert(varX + varY);
   } else {
      alert('Неверно!');
   }
}*/
//============
/* 8. Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, 
то увеличьте x на 2, иначе прибавьте к x число 5. 
Выведите новое значение переменной на экран.*/
/*let x = +prompt('Add number!', '');
let y = +prompt('Add number!', '');
if ((x > 2 && x < 11) || (y >= 6 && y <= 14)) {
   alert(x * 2);
} else {
   alert(x + 5);
}*/
//===========
/* 9. Получите из prompt значение для имени пользователя. 
Выведите на экран приветствие. 
Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.*/
/*let userName = prompt('What is your name?', '');
if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( `Алоха ${userName} ` );
}*/
//==============
/* 10. Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. 
Переменная lang может принимать три значения: ‘ua’, 'en', 'de' (например, из prompt). Если она имеет значение ‘ua’, 
то в переменную greeting запишите приветствие на украинском, если имеет значение 'en' – то на английском, если 'de' – на немецком. 
Выведите на экран приветствие в зависимости от значения переменной lang. 
Решите задачу через if-else и через switch-case.*/
// if-else
/*let greeting = '';
let lang = prompt('Choose ua en or de', '');*/
/*if (lang == 'ua') {
   alert(greeting = 'Привіт');
} else if (lang == 'en') {
   alert(greeting = 'Hallo');
} else if (lang == 'de') {
   alert(greeting = 'Guten Tag')
} else {
   alert('Bye')
}*/
// switch-case
/* switch (lang) {
  case 'ua':
    alert(greeting = 'Привіт');
    break;
  case 'en':
    alert(greeting = 'Hallo');
    break;
  case 'de':
    alert(greeting = 'Guten Tag')
    break;
  default:
    alert( "Bye" );
}*/
//===============
/* 11. Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.*/
/*let str = '.#';
let sum;
for (let i = 0; i < 5; i++) {
   if (i == 0) {
      sum = str;
   } else {
      sum = sum + str;
   }
} 
  alert(sum);*/
//============
/* 12. Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление.
  Программа поздравляет того, чье имя определяется в переменной username:
  Happy birthday to you Happy birthday to you Happy birthday dear {{username}}
  Happy birthday to you • Напишите цикл с confirm, который продолжается при
  нажатии на Отмена и прерывается при нажатии на Ok.*/
/*let userName = prompt('Add your name', '');
let congrat;
do {
  congrat = confirm(`Happy birthday to you Happy birthday to you 
Happy birthday dear ${userName} Happy birthday to you`);
} while (congrat != true); */
//============
/* 13. В окно prompt вводится число. 
Напишите цикл, в котором суммируются все нечетные числа до диапазона, 
введенного пользователем. Результат отобразите в окне alert.*/
/*let num5 = +prompt('Add number', '');
let sum = 0;
for (let i = 1; i <= num5; i += 2) {
    sum += i;
}
alert(sum);*/
//=============
/* 14. Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9. 
Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.*/

/*for (let it = 0; true; it++) {
   let val = Math.random();
   if (val > 0.9) {
      alert(`val: ${val}, iter: ${it}`);
    break;
 }  
}*/
//=============
/* 15. Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4...*/
/*let value = 0;
for (let i = 1; i <= 10; i++) {
   for (let r = 1; r <= 10; r++){
      value = i * r;
      console.log(i + 'x' + r + '=' + value);
   }
}*/
//============
/* 16. С помощью цикла for с пустым телом сформируйте строку, 
представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...  - (выполнять по желанию)*/
/*let num1 = 1;
let num2 = 1;
for (let i = 3; i < Infinity; i++) {
   let num3 = num1 + num2;
   num1 = num2;
   num2 = num3;
   alert(num1);
}*/
