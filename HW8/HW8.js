// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.


let user = {
    name: 'Max',
    greet: function () {
        console.log('Hello')
    }

}


function Copy(obj) {
    let emptyObj = {};


    if (obj === null || obj === undefined) return obj;
    if (typeof obj !== 'object') return obj;




    for (const objKey in obj) {
        const value = obj[objKey];
        if (value === null) {
            throw new Error(`Property "${objKey}" is null`);
        } else if (value === undefined) {
            throw new Error(`Property "${objKey}" is undefined`);
        } else if (typeof value === 'number' && isNaN(value)) {
            throw new Error(`Property "${objKey}" is NaN`);
        }
    }


    for (const objKey in obj) {
        if (typeof obj[objKey] === 'function') {
            emptyObj[objKey] = obj[objKey];
        }
    }


    let copy = JSON.stringify(obj);
    let paste = JSON.parse(copy);


    for (const key in paste) {
        emptyObj[key] = paste[key];
    }

    return emptyObj;
}


console.log(Copy(user));


// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції






let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index + 1})));