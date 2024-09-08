// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//

let text = document.getElementById('text')
let button = document.getElementById('button')


button.onclick = function () {
    if (text.style.display === 'none') {
        text.style.display = 'block'; // Показываем текст
    } else {
        text.style.display = 'none';  // Скрываем текст
    }
}


//         #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


document.getElementById('checkButton').onclick = function () {

    const age = document.getElementById('ageInput').value;
    const message = document.getElementById('message');


    if (age < 18) {
        message.textContent = 'Вам менше 18 років';
        message.style.color = 'red';
    } else {
        message.textContent = 'Вік підходить!';
        message.style.color = 'green';
    }
}


//
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


document.getElementById('submitButton').onclick = function () {

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;


    const user = {
        name: name,
        surname: surname,
        age: age
    };


    const output = document.getElementById('output');
    output.textContent = ` ${JSON.stringify(user)}`;
}




// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//




let currentNumber = +localStorage.getItem('number');

currentNumber += 1;


localStorage.setItem('number', currentNumber);


document.getElementById('counter').innerText = currentNumber;




// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

//
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//

const kgInput = document.getElementById('kgInput');
const resultSpan = document.getElementById('result');

kgInput.addEventListener('input', function() {
    const kgValue = parseFloat(kgInput.value);


    if (!isNaN(kgValue)) {
        const pounds = (kgValue * 2.20462).toFixed(2);
        resultSpan.textContent = `Фунти: ${pounds}`;
    } else {
        resultSpan.textContent = 'Фунти: 0';
    }
});


// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    let storedArray = JSON.parse(localStorage.getItem(arrayName)) || [];


    storedArray.push(objToAdd);

    localStorage.setItem(arrayName, JSON.stringify(storedArray));
}


const newObj = { name: 'Max', age: 20 };

addToLocalStorage('users', newObj);


//
//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

document.getElementById('generate').addEventListener('click', function() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const content = document.getElementById('content').value;

    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.textContent = content;
            cell.style.border = '1px solid black';
            cell.style.padding = '5px';
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
});

//
//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


const priceBlock = document.getElementById('priceBlock');

let lastUpdateTime = localStorage.getItem('lastUpdateTime') || 0;
let currentPrice = parseInt(localStorage.getItem('currentPrice')) || 100;

const currentTime = Date.now();

if (currentTime - lastUpdateTime >= 10000) {
    currentPrice += 10;
    lastUpdateTime = currentTime;

    localStorage.setItem('currentPrice', currentPrice);
    localStorage.setItem('lastUpdateTime', lastUpdateTime);
}

priceBlock.textContent = `${currentPrice}грн`;


//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
