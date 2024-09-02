class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {

    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella('asd1', 1231, 34),
    new Cinderella('asd2', 1232, 35),
    new Cinderella('asd3', 1233, 36),
    new Cinderella('asd4', 1234, 37),
    new Cinderella('asd5', 1235, 38),
    new Cinderella('asd6', 1236, 39),
];

const prince = new Prince('qweqwe', 123123, 36);


for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella;
    }
}

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);

prince.wife = cinderellaMain;