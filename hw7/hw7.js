// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let user1 = new User(1, 'max', 'chup', '@gmail', 3800900)
console.log(user1);


let emptyArr = []

emptyArr.push(new User(1, 'max', 'chup', '@gmail', 3800900))
emptyArr.push(new User(2, 'alex', 'chup', '@gmail', 3800900))
emptyArr.push(new User(3, 'sasha', 'chup', '@gmail', 3800900))
emptyArr.push(new User(4, 'bob', 'chup', '@gmail', 3800900))
emptyArr.push(new User(5, 'kok', 'chup', '@gmail', 3800900))
emptyArr.push(new User(6, 'nob', 'chup', '@gmail', 3800900))
emptyArr.push(new User(7, 'lob', 'chup', '@gmail', 3800900))
emptyArr.push(new User(8, 'monica', 'chup', '@gmail', 3800900))
emptyArr.push(new User(9, 'nik', 'chup', '@gmail', 3800900))
emptyArr.push(new User(10, 'rusty', 'chup', '@gmail', 3800900))


console.log(emptyArr);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let evenArr = emptyArr.filter(user => {
    if (user.id % 2 === 0) {
        return user;
    }
})
console.log(evenArr);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


let idSort = emptyArr.sort((user1, user2) => {
    return user1 - user2;
})
console.log(idSort);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.order = order;

    }
}

let clients = []

console.log(new Client(1, 'max', 'chup', '@gmail', 380, ['socks', 'tv']));


clients.push(new Client(1, 'max', 'chup', '@gmail', 380, ['socks', 'tv', 'ps5']))
clients.push(new Client(2, 'max', 'chup', '@gmail', 380, ['socks', 'tv', 'desk', 'glass',]))
clients.push(new Client(3, 'max', 'chup', '@gmail', 380, ['socks', 'tv', 'js']))
clients.push(new Client(4, 'max', 'chup', '@gmail', 380, ['socks', 'tv', 'mobile', 'pc']))
clients.push(new Client(5, 'max', 'chup', '@gmail', 380, ['socks', 'tv', 'mat']))
clients.push(new Client(6, 'max', 'chup', '@gmail', 380, ['socks', 'tv', 'atv', 'car']))
clients.push(new Client(7, 'max', 'chup', '@gmail', 380, ['socks', 'tv', 'ipod']))
clients.push(new Client(8, 'max', 'chup', '@gmail', 380, ['socks', 'tv', 'pillow']))
clients.push(new Client(9, 'max', 'chup', '@gmail', 380, ['socks', 'tv',]))
clients.push(new Client(10, 'max', 'chup', '@gmail', 380, ['socks', 'tv', 'cushion', 'book', 'table']))


console.log(clients);
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let ordersArr = clients.sort((item1, item2) => item1.order.length - item2.order.length)


console.log(ordersArr);

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function CarMaker(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model
    this.manufacturer = manufacturer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume


    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    this.info = function () {
        for (const specs in this) {
            console.log(specs, this[specs])

        }
    };
    this.newMaxSpeed = function (newSpeed) {
        this.maxSpeed = maxSpeed + newSpeed;

    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver


    };


}

const car = new CarMaker('Tesla', 'Tesla Inc', 2022, 250, 3.0);
console.log(car);

car.drive()
car.info()
car.newMaxSpeed()
car.changeYear()
car.addDriver({name: 'max'})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class SuperCar {


    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    };

    drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const specs in this) {
            console.log(specs, this[specs])

        }
    };

    newMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;

    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver


    };

}

let Supercar1 = new SuperCar('Tesla', 'Tesla Inc', 2022, 250, 3.0);
console.log(Supercar1);


Supercar1.drive()
Supercar1.info()
Supercar1.newMaxSpeed(10)
Supercar1.changeYear()
Supercar1.addDriver({name: 'max'})
//
//












//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку





class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let Cinderella1 = new Cinderella('Sasha', 20, 31);
console.log(Cinderella1);

let Cinderellas = [
    new Cinderella('Sasha', 20, 31),
    new Cinderella('Nasha', 21, 30),
    new Cinderella('Dasha', 19, 29),
    new Cinderella('Lasha', 18, 26),
    new Cinderella('Hasha', 17, 24),
    new Cinderella('Jasha', 26, 23),
    new Cinderella('Kasha', 22, 29),
    new Cinderella('Masha', 25, 26),
    new Cinderella('Isha', 23, 25),
    new Cinderella('Tisha', 25, 25)
];

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
        this.wife = null;
    }
}

let prince1 = new Prince('Oleh', 20, 30);

// Use the find() method with a callback function to find the matching Cinderella
const matchingCinderella = Cinderellas.find((cinderella) => cinderella.shoeSize === prince1.shoeSize);

if (matchingCinderella) {
    prince1.wife = matchingCinderella.name;
    console.log(`Prince ${prince1.name} has found his wife, ${prince1.wife}.`);
} else {
    console.log("No match found for the prince.");
}


//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};






Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};



const numbers = [1, 2, 3, 4, 5];


numbers.myForEach((num, index, arr) => {
    console.log(`Element: ${num}, Index: ${index}, Array: ${arr}`);
});


const evenNumbers = numbers.myFilter((num) => num % 2 === 0);
console.log(evenNumbers);