// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.textContent = 'Это оригинальный блок div';                                                                           ///Почему без текста я не вижу див??????????!!!!!!!!!!!!!!!!!!!!!!!!!!!!

document.body.appendChild(div)

let clonedDiv = div.cloneNode(true);


document.body.appendChild(clonedDiv);


//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


const arr = ['Main', 'Products', 'About us', 'Contacts']

let ul = document.createElement('ul');

for (const item of arr) {
    let li = document.createElement('li')
    li.innerText = item;
    ul.append(li)
    document.body.appendChild(ul)

}


//
// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (const course of coursesAndDurationArray) {
    let div = document.createElement('div');


    div.innerText = course.title + ' ' + course.monthDuration

    document.body.appendChild(div)


}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.write(`<br>`)
document.write(`<br>`)
document.write(`<br>`)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//


for (const element of coursesAndDurationArray) {

    let div = document.createElement('div');
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    div.classList.add('item')
    h1.classList.add('heading')
    p.classList.add('description')

    h1.innerText = element.title
    p.innerText = element.monthDuration

    div.append(h1, p)


    document.body.appendChild(div)


}