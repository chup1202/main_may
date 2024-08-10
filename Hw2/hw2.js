// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let FirstArray = [
    10,
    20,
    'ew',
    120,
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    3200

]
console.log(FirstArray[0])
console.log(FirstArray[1])
console.log(FirstArray[2])
console.log(FirstArray[3])
console.log(FirstArray[4])
console.log(FirstArray[5])
console.log(FirstArray[6])
console.log(FirstArray[7])
console.log(FirstArray[8])
console.log(FirstArray[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: "To Kill a Mockingbird",
    pageCount: 200,
    genre: "Fiction"
};

const book2 = {
    title: "1984",
    pageCount: 300,
    genre: "Dystopian"
};

const book3 = {
    title: "Pride and Prejudice",
    pageCount: 100,
    genre: "Romance"
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


const book4 = {
    title: "To Kill a Mockingbird",
    pageCount: 200,
    genre: "Fiction",
    authors: [{
        age: 100,
        name: 'Jack'
    }]
};

const book5 = {
    title: "1984",
    pageCount: 300,
    genre: "Dystopian",
    authors: [{
        age: 100,
        name: 'Jack'
    }]

};

const book6 = {
    title: "Pride and Prejudice",
    pageCount: 100,
    genre: "Romance",
    authors: [{
        age: 100,
        name: 'Jack'
    }]

};


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let userList = [
    {name: "Jack", username: "jaa", password: "1233453"},
    {name: "Jack", username: "jaa", password: "1233453"},
    {name: "Jack", username: "jaa", password: "1233453"},
    {name: "Jack", username: "jaa", password: "1233453"},
    {name: "Jack", username: "jaa", password: "1233453"},
    {name: "Jack", username: "jaa", password: "1233453"},
    {name: "Jack", username: "jaa", password: "1233453"},
    {name: "Jack", username: "jaa", password: "1233453"},
    {name: "Jack", username: "jaa", password: "1233453"},
    {name: "Jack", username: "jaa", password: "1233453"},

]
console.log(userList[0].password)
console.log(userList[1].password)
console.log(userList[2].password)
console.log(userList[3].password)
console.log(userList[4].password)
console.log(userList[5].password)
console.log(userList[6].password)
console.log(userList[7].password)
console.log(userList[8].password)
console.log(userList[9].password)


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let weather = [{
    Monday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Tuesday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Wednesday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Thursday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Friday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Saturday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Sunday: {
        morning: 10,
        midday: 15,
        evening: 9
    }
}


]


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = 10

if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('НЕвірно')
}

let a = 1

if (a === 0) {
    console.log(a = 0)
} else if (a === 1) {
    console.log(a = 1)
} else if (a === -3) {
    console.log(a = -3)
} else {
    console.log('????')
}


// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = 30
if (time <= 14) {
    console.log('Перша')
} else if (time > 14 && time <= 29) {
    console.log('Друга')
} else if (time > 29 && time <= 44) {
    console.log('Третя')
} else if (time > 44 && time <= 59) {
    console.log('Четверта')
} else {
    console.log('????')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = 15

if (day <= 10) {
    console.log('first')
} else if (day > 10 && day <= 20) {
    console.log('Second')
} else if (day > 20 && day <= 31) {
    console.log('third')
} else {
    console.log('????')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let input = +prompt('enter a day(1-7)')

switch (prompt) {
    case 1: {
        console.log('Monday');
        break;

    }
    case 2: {
        console.log('Tuesday');
        break;

    }
    case 3: {
        console.log('Wednesday');
        break;

    }
    case 4: {
        console.log('Thursday');
        break;

    }
    case 5: {
        console.log('Friday');
        break;

    }
    case 6: {
        console.log('Saturday');
        break;

    }
    case 7: {
        console.log('Sunday');
        break;

    }
    default: {
        console.log('?????')
    }
}


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.


let InputNumber = +prompt('Enter number')
let InputNumber2 = +prompt('Enter number2')

if (InputNumber > InputNumber2) {
    console.log(InputNumber, 'Max number')
} else if (InputNumber2 > InputNumber) {
    console.log(InputNumber2, 'Max number')
} else if (InputNumber2 === InputNumber) {
    console.log('equally')
} else {
    console.log('????')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


let X = null
if (X === false) {
    x = 'default'
}
console.log(X)


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}]



if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
} else if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
} else if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
} else if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
} else if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
} else if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}
