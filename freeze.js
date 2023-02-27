const bottle = {color: 'yellow', price: 50, capacity: 1, isCleaned: true};
// console.log(bottle);

const keys = Object.keys(bottle);
// console.log(keys);

const values = Object.values(bottle);
// console.log(values);

const pair = Object.entries(bottle);
// console.log(pair);
// console.log(pair[1][1]);

console.log(bottle);

// Object.seal(bottle);

Object.freeze(bottle);

delete bottle.isCleaned;
bottle.price = 400;

bottle.height = 12;

console.log(bottle);
