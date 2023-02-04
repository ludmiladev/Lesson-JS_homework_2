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
//     author: [
//            {
//                name:'Maксим', age: 35
//            },
//            {
//                name:'Олеся', age: 28
//            },
//            {
//                name:'Наташа', age: 44
//            },
//            {
//                name:'Ігор', age: 37
//            }
//
//        ]
// }
// console.log(geography);
// console.log(geography.author[0]);
// console.log(geography.author[2]);
//
// let history = {
//     name: "Битва під Крутами",
//     number_of_sides: 12,
//     genre: "Історичний",
//     author: [
//         {
//             name:'Саша', age: 19
//         },
//         {
//             name:'Валерія', age: 23
//         },
//         {
//             name:'Оксана', age: 32
//         },
//         {
//             name:'Фіона', age: 47
//         }
//
//     ]
// }
// console.log(history);
// console.log(history.author[0]);
// console.log(history.author[1]);
//
// let archeology = {
//     name: "Піраміди Хеопса",
//     number_of_sides: 140,
//     genre: "Археологічні розкопки",
//     author: [
//         {
//             name:'Марк', age: 42
//         },
//         {
//             name:'Єгор', age: 18
//         },
//         {
//             name:'Галина', age: 37
//         },
//         {
//             name:'Злата', age: 45
//         }
//
//     ]
// }
// console.log(archeology);
// console.log(archeology.author[2]);
// console.log(archeology.author[3]);

// Aбо
//
// let geography = { }
//
//     geography.name = "Річки та ліси України"
//     geography.number_of_sides = 219,
//     geography.genre = "Географічне положення",
//     geography.author = [
//            {
//                name:'Maксим', age: 35
//            },
//            {
//                name:'Олеся', age: 28
//            },
//            {
//                name:'Наташа', age: 44
//            },
//            {
//                name:'Ігор', age: 37
//            }
//          ]
//
// console.log(geography);
//
//
// let history = { }
//
//     history.name = "Битва під Крутами",
//     history.number_of_sides = 12,
//     history.genre = "Історичний",
//     history.author = [
//         {
//             name:'Саша', age: 19
//         },
//         {
//             name:'Валерія', age: 23
//         },
//         {
//             name:'Оксана', age: 32
//         },
//         {
//             name:'Фіона', age: 47
//         }
//     ]
//
// console.log(history);
//
//
// let archeology = { }
//     archeology.name = "Піраміди Хеопса",
//     archeology.number_of_sides = 140,
//     archeology.genre = "Археологічні розкопки",
//     archeology.author = [
//         {
//             name:'Марк', age: 42
//         },
//         {
//             name:'Єгор', age: 18
//         },
//         {
//             name:'Галина', age: 37
//         },
//         {
//             name:'Злата', age: 45
//         }
//     ]
//
// console.log(archeology)


/*- Створити масив з 10 об'єктами, які описують сутність "користувача". Поля: ім'я, ім'я користувача, пароль. Перейти в консоль пароля кожного користувача*/

// let users = [
//
//     {name:'Ivan',username:'Rojal',password:'323ehg398'},
//     {name:'Olja',username:'Basic',password:'Ndfe59873'},
//     {name:'Ira',username:'Kolo',password:322551498},
//     {name:'Natasha',username:'Vanda',password:'ljvf2369e'},
//     {name:'Maksim',username:'Leon',password:'TU369ljh5'},
//     {name:'Sonia',username:'Snikers',password:'3158fghj5'},
//     {name:'Denis',username:'Solomon',password:'356981dGy'},
//     {name:'Pavlo',username:'Juventys',password:'239YR239m'},
//     {name:'Roza',username:'Boord',password:'K239ldy45'},
//     {name:'Lili',username:'Kyzma',password:'D59gl53sl'},
//     {name:'Volodymyr',username:'Solon',password:159753286}
// ]
// console.log(users);
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);

/*Логічні розгалуження:*/
/*- Є зумінна х, яка ви надаєте вільне числове значення.*/
/*Якщо змінна x не дорівнює нулю, введіть 'Вірно', інакше введіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3*/

// let argument = -3;
// if(argument !== 0) {
//     alert('Вірно');
//     console.log('Вірно');
// } else {
//     alert('Невірно')
//     console.log('Невірно');
// }

// АБО

// let number=prompt('Введіть будь ласка число');
//
// if (number) {
//     alert( "Вірно" );
// } else
//     alert( "Невірно" );
//
// (number !== 0) ? console.log('ВІРНО') : console.log('Невірно')

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

// let number1 = 100;
// let number2 = 36;
//
// if (number1>number2){
//     console.log(number1, 'Максимальне число із двох введених' );
// } else if(number1===number2){
//     console.log(number1, number2, 'числа однакові');
// } else {
//     console.log(number2, 'Максимальне число із двох введених');
// }

/*- є змінна х, яка може прийняти будь-яке значення (рядок, число, undefined, null і тд включно).
 Напишіть код який,за допомогу оператора || буде присвоювати змінний х значення, якщо "default" значення змінної х являється false (хибноподібні,
 тобто приводиться до false)*/

// let x = 'sos' || 'default';
// console.log(x);

/*- - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
 За допомоги іф перевірити кожен його елемент на тривалість навчання.
У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
.*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration >= 5){
    console.log(coursesAndDurationArray[0], 'Супер')
}else {
    console.log('Навчання менше 5 місяців')
}
if (coursesAndDurationArray[1].monthDuration >= 5){
    console.log(coursesAndDurationArray[1], 'Супер')
}else {
    console.log('Навчання менше 5 місяців')
}
if (coursesAndDurationArray[2].monthDuration >= 5){
    console.log(coursesAndDurationArray[2], 'Супер')
}else {
    console.log('Навчання менше 5 місяців')
}
if (coursesAndDurationArray[3].monthDuration >= 5){
    console.log(coursesAndDurationArray[3], 'Супер')
}else {
    console.log('Навчання менше 5 місяців')
}
if (coursesAndDurationArray[4].monthDuration >= 5){
    console.log(coursesAndDurationArray[4], 'Супер')
}else {
    console.log('Навчання менше 5 місяців')
}
if (coursesAndDurationArray[5].monthDuration >= 5){
    console.log(coursesAndDurationArray[5], 'Супер')
} else {
    console.log('Навчання менше 5 місяців')
}
