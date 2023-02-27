// 1. create object using object literals

const player = {};

player.name = 'Abu sufian';
player.specialty = 'Batsman';
player.bat = function(){
    console.log('Swing you bat.!!!');
}

// console.log(player);
// player.bat();


const student = {
    name: 'Afia Zannat',
    job: 'baller',
    ball: function(){
        console.log('throw the ball!!!');
    },
    salary: 20000,

}

//  2. object constructor

const person = new Object();
// console.log(person);

//  3. object create method

// const item = Object.create(null);

const atel = Object.create(student);
// console.log(atel.friend);


//  4. class

class Car {
    name = 'tesla';
    price = 400;
    constructor(model){
        this.model = model;
    }
}

const myCar = new Car('elon');
// console.log(myCar);

//  5. function

function phone (model, price){
    this.model = model;
    this.price = price;
}

const myPhone = new phone('iphone', 4000);

console.log(myPhone);
