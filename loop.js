const numbers = [12, 32, 15, 85];

// for(const number of numbers){
//     console.log(number);
// }

const bottle = {color: 'yellow', price: 50, capacity: 1, isCleaned: true};

for(const key of Object.keys(bottle)){
    // console.log(key);

    // console.log(key, bottle[key]);
}

// for in 

for(const key in bottle){
    // console.log(key, bottle[key]);
}

//  Object.entries key/value pair 2D array using destructuring

for( const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}
