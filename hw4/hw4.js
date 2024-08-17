// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


function rectangle(a, b) {
    return a * b;
}

let rectS = rectangle(10, 10)
console.log(rectS)


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle(a) {
    const P = 3.14;
    return P * a * a;


}

console.log(circle(4))


// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


function cylinder(r, h) {
    return 2 * Math.PI * r * h;


}

console.log(cylinder(4, 6))


// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент


let arr1 = [10, 'lol', 23, 40]


function displayArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])


    }
}

displayArr(arr1);


// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент


function showText(text) {
    document.write(`<p>  ${text} </p>`)

}

showText('hello')


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий


function createUl(text) {
    document.write(`
    <ul>
    
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>


</ul>`)
}

createUl('Hi')


// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function createUl2(text, number) {
    if (typeof text === 'string' && typeof number === 'number') {

        document.write(`<ul>`)

        for (let i = 0; i < number; i++) {

            document.write(`

            <li>${text}</li>




`)

        }
        document.write(`</ul>`)


    }


}

createUl2('HELLO', 3)


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write


let arr2 = ['hi', 12, true]

function primitiveArr(arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)

    }
    document.write(`</ul>`)


}

primitiveArr(arr2)
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let arr3 = [
    {id: 3, name: 'Max', age: 100},
    {id: 3, name: 'Max', age: 100},
    {id: 3, name: 'Max', age: 100},
    {id: 3, name: 'Max', age: 100}

]

function characteristicsArr(arr) {
    for (const arrElement of arr) {

        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)


    }


}


characteristicsArr(arr3)


//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву




function returnMinFromArr(numbers){
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i]
        if (number<min){
            min=number;
        }




    }
    return min



}
document.write(returnMinFromArr([1,22,44,0]))


// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

document.write(`<br>`)
function sum(arr) {
    let zero = 0;
    for (const item of arr) {
        zero += item;
    }
    return zero;
}

console.log(sum([1, 2, 10])); // -> 13












// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]




function swap(arr,index1,index2){
    let basket = arr[index1];
    arr[index1]= arr[index2];
    arr[index2]=basket;

    return arr;




}
console.log(swap([11,22,33,44],2,1))














// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400




function exchange(sumUAH,currencyValues,exchangeCurrency){
    if (exchangeCurrency === 'USD' && typeof sumUAH === 'number'){
        console.log(sumUAH/currencyValues[0].value)
    }
    else if (exchangeCurrency === 'EUR' && typeof sumUAH === 'number' ){
        console.log(sumUAH/currencyValues[1].value)

    }
    else{
        console.log('enter valid values!!')
    }




}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')