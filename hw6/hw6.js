// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length)
console.log('lorem ipsum'.length)
console.log('javascript is cool'.length)


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase())
console.log('lorem ipsum'.toUpperCase())
console.log('javascript is cool'.toUpperCase())


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


console.log('hello world'.toLowerCase())
console.log('lorem ipsum'.toLowerCase())
console.log('javascript is cool'.toLowerCase())

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


let str = ' dirty string   '


console.log(str.trim());
//
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


let str1 = 'Ревуть воли як ясла повні';
const stringToArray = (str) => str.split(' ')

console.log(stringToArray(str1));


//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]


console.log(numArr.map(number => number.toString()));


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//


let nums = [11, 21, 3];

sortNums = (array, direction) => {
    if (direction === 'ascending')
        return array.sort((a, b) =>
            a - b)
    if (direction === 'descending')
        return array.sort((a, b) =>
            b - a)
}


console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//


// =========================


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let sortByMonth = coursesAndDurationArray.sort((user1, user2) => {
    return user2.monthDuration - user1.monthDuration;
});

console.log(sortByMonth)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


let filterCourse = coursesAndDurationArray.filter(item => {
    return item.monthDuration > 5;

});

console.log(filterCourse)


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let transformTo = coursesAndDurationArray.map((item, index) => {
    item.id = index + 1
    return item
})
console.log(transformTo)


//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];


const cards = [];


for (const suit of suits) {
    for (const value of values) {
        const card = ({suit: suit, value: value})

        if (suit === 'diamond' || suit === 'heart') {
            card.color = 'red';

        } else {
            card.color = 'black';
        }

        cards.push(card)
    }


}


// - знайти піковий туз

console.log(cards.find(card => card.value === 'ace' && card.suit === 'spade')
);

// - всі шістки
console.log(cards.filter(card => card.value === '6')
);


// - всі червоні карти


console.log(cards.filter(card => card.color === 'red')
);
// - всі буби

console.log(cards.filter(card => card.suit === 'diamond')
);
// - всі трефи від 9 та більше


console.log(cards.filter(card => card.suit === 'club' && (card.value === '9' || card.value === '10' || card.value === 'jack' || card.value === 'queen' || card.value === 'king' || card.value === 'ace')));


//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//  spades:[],
//      diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================


console.log(cards.reduce((accumulator, card) => {
    switch (card.suit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'club':
            accumulator.clubs.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
    }

    return accumulator;


}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
}));


// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let resultFilter = coursesArray.filter(value => {
    if (value.modules.includes('sass')) {
        return value;
    }
    if (value.modules.includes('docker')) {
        return value;
    }


})
console.log(resultFilter)
