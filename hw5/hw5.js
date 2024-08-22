// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


const rectCounter = (a, b) => a * b

console.log(rectCounter(10, 10));


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const sCounter = (a) => Math.PI * a * a

console.log(sCounter(10));


// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


const sCounter2 = (h, r) => Math.PI * r * h;


console.log(sCounter(4, 5));


// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент


const arrOutput = (arr) => {
    for (const item of arr) {

        console.log(item)


    }
}
arrOutput([10, 'Hi', 20])


// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


const pCreator = (text) => document.write(`<p>${text}</p>`)


pCreator('hello')


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


const ulCreator = (text) =>
    document.write(
        `<ul>


        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>

        </ul>`)


ulCreator('wqdqoqdjqd')


// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


const ulCreator2 = (text, quantity) => {
    let ul = `<ul>`
    document.write(ul)


    for (let i = 1; i < quantity; i++) {

        console.log(`<li>${text}</li>`)

    }
    ul += `</ul>`

}
ulCreator('ohayo', 5)


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


const arrWaiter = (arr) => {
    let ul = `<ul>`
    document.write(ul)


    for (const item of arr) {

        document.write(`<li>${item}</li>`)


    }


    ul += `</ul>`


}
arrWaiter(['hi', 10, true, 15, 'lol'])


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'kokos', age: 123},
    {id: 2, name: 'kokos', age: 123},
    {id: 3, name: 'kokos', age: 123},
    {id: 4, name: 'kokos', age: 123},
    {id: 5, name: 'kokos', age: 123},
]
const arrWaiter2 = (arr) => {
    for (const item of arr) {
        document.write(`<div>${item.id} ${item.name} ${item.age} </div>`)


    }


}
arrWaiter2(users)

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


const returnMinValue = (arr) => {
    let min = 0
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (number <= min) {
            min = number


        }


    }
    return min


}
console.log(returnMinValue([10, 20.40, 0, 600, 100]));


// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


const sumArr = (arr) => {
    let starter = 0;
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        starter += number;


    }
    return starter

}
console.log(sumArr([1, 2, 10, 10]));


// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


const swap = (arr, index1, index2) => {

    let basket = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = basket;

    return arr;


}


console.log(swap([11, 22, 33, 44], 2, 1));


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    if (exchangeCurrency === 'USD' && typeof sumUAH === 'number') {
        console.log(sumUAH / currencyValues[0].value)
    } else if (exchangeCurrency === 'EUR' && typeof sumUAH === 'number') {
        console.log(sumUAH / currencyValues[1].value)

    } else {
        console.log('enter valid values!!')
    }


}
exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD')