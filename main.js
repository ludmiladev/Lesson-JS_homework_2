/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент у консоль*/
// let fruit = [
//     19,
//     26,
//     'red',
//     'blue',
//     null,
//     true,
//     false
// ];
//
// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);
// console.log(fruit[4]);
// console.log(fruit[5]);
// console.log(fruit[6]);
// console.log(fruit[0],[1],[2]);
// console.log(fruit[0]+[1]+[2]);
//
// // Або
// let color = [];
// color[0] = "blue";
// color[0] = "red";
// color[0] = "green";
// color[0] = "purple";
// color[0] = "yellow";
// console.log(color);




/*- Створити 3 об'єкти, які описують книги. Поля об'єкта : назва, кількість сторінок, жанр.*/
// let cookbook = {
//     name: "Домашня випічка",
//     number_of_sides: 256,
//     genre: "кулінарія",
// }
// console.log(cookbook);
//
// let medical_book = {
//     name: "Медична енциклопедія",
//     number_of_sides: 895,
//     genre: "медицина",
// }
// console.log(medical_book);
//
// let children_book = {
//     name: "Рапунцель",
//     number_of_sides: 15,
//     genre: "дитяча література",
// }
// console.log(children_book);




/*- Створити 3 об'єкти, які описують книги. Поля об'єкта : назва, кількість сторінок, жанр, автори. Поле "автори" - виникає масивом. Кожен автор має поле ім'я та вік.*/

// let geography = {
//     name: "Річки та ліси України",
//     number_of_sides: 219,
//     genre: "Географічне положення",
//     author: ["Maксим ", "Олеся", "Наташа", "Ігор"]
// }
// console.log(geography);
// console.log(geography.author[0]);
// console.log(geography.author[2]);
//
// let history = {
//     name: "Битва під Крутами",
//     number_of_sides: 12,
//     genre: "Історичний",
//     author: ["Саша", "Валерія", "Оксана", "Фіона"]
// }
// console.log(history);
// console.log(history.author[0]);
// console.log(history.author[1]);
//
// let archeology = {
//     name: "Піраміди Хеопса",
//     number_of_sides: 140,
//     genre: "Археологічні розкопки",
//     author: ["Марк", "Єгор", "Галина", "Злата"]
// }
// console.log(archeology);
// console.log(archeology.author[2]);
// console.log(archeology.author[3]);

// Aбо

// let geography = { }
//     geography.name = "Річки та ліси України"
//     geography.number_of_sides = 219,
//     geography.genre = "Географічне положення",
//     geography.author = ["Maксим ", "Олеся", "Наташа", "Ігор"]
//
// console.log(geography);
//
// let history = { }
//     history.name = "Битва під Крутами",
//     history.number_of_sides = 12,
//     history.genre = "Історичний",
//     history.author = ["Саша", "Валерія", "Оксана", "Фіона"]
//
// console.log(history);
//
// let archeology = { }
//     archeology.name = "Піраміди Хеопса",
//     archeology.number_of_sides = 140,
//     archeology.genre = "Археологічні розкопки",
//     archeology.author = [name1 :"Марк", age:19, name2:"Єгор", age:26, name3: "Галина", age:26, name4 :"Злата", age:26]
//
// console.log(archeology)




/*- Створити масив з 10 об'єктами, які описують сутність "користувача". Поля: ім'я, ім'я користувача, пароль. Перейти в консоль пароля кожного користувача*/

// let users = [
//     'name',
//     'surname',
//     'patronymic',
//     'age',
//     'gender',
//     'place of residence',
//     'phone number',
//     'profession',
//     'level of English',
//     'password'
// ]
// console.log(users);
// console.log(users[9]);




/*Логічні розгалуження:*/
/*- Є зумінна х, яка ви надаєте вільне числове значення.*/
/*Якщо змінна x не дорівнює нулю, введіть 'Вірно', інакше введіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3*/

// let argument = -3;
// if(argument !== 0) {
//     alert('Вірно');
// } else {
//     alert('Невірно')
// }



/*- Дано змінний час, який відповідає числу від 0 до 59. Потрібно написати код, який перевірив, до якої четвертої години потрапляє число*/
/*(в першу, другу, третю або четверту частину години).*/

// let number = 22;
// if (number>= 0 && number <= 14) {
//     alert ( 'В першу четверть');
// }
// if (number>= 15 && number <= 30) {
//     alert ( 'У другу четверть');
// }
// if (number>= 31 && number <= 45) {
//     alert ( 'В третю четверть');
// }
// if (number>= 46 && number <= 59) {
//     alert ( 'В четверту четверть');
// }



/*- У змінний день дано якесь число від 1 до 31. Потрібно працювати, у яку половину(декаду) місяця випускається це число (у першу, другу чи третю).*/

// let day = -42;
// if (day>= 1 && day <= 10) {
//     alert ( 'В першу декаду місяця');
// }
// if (day>= 11 && day <= 20) {
//     alert ( 'У другу декаду місяця');
// }
// if (day>= 21 && day <= 31) {
//     alert ( 'В третю декаду місяця');
// } else {
//     alert ( 'Taкого дня місяця немає');
// }


/*- Скласти розклад на тиждень для домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інформація,
 що запланована на цей день (можна замість плану на день, назва дня англійською).*/

// let day = 7;
//
// switch (day) {
//     case 1:
//         alert ( 'В понеділок математика');
//         break;
//     case 2:
//         alert ( 'У вівторок фізика');
//         break;
//     case 3:
//         alert ( 'У середу музика');
//         break;
//     case 4:
//         alert ( 'У четвер гімнастика');
//         break;
//     case 5:
//         alert ( 'У пятницю конференція');
//         break;
//     case 6:
//         alert ( 'У суботу в кіно на Аватара');
//         break;
//     case 7:
//         alert ( 'У неділлю виспатися)');
//         break;
//     default:
//         alert('такого порядкового номеру дня тижня не існує');
//         break;
// }


/*- Користувач вводить або має два числа.*/
/*  Потрібно знайти та вивести максимальне число з цих двох.*/
/*  Також потрібно врахувати коли введені рівні числа.*/
// let num1 = 1;
// let num2 = 2;



/*- є змінна х, яка може прийняти будь-яке значення (рядок, число, undefined, null і тд включно).
 Напишіть код який,за допомогу оператора || буде присвоювати змінний х значення, якщо "default" значення змінної х являється false (хибноподібні,
 тобто приводиться до false)*/


/*- з файлу arrays.js (лежати в папці 2023 plan ) взяти масив coursesAndDurationArray.
За допомогою перевірте кожен його елемент на тривалість навчання. У разі якщо тривалість довша за 5 місяців виведіть у консоль "Супер".*/
