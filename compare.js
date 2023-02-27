// const first = { a: 5, b:2};
// const second = {a: 5, b: 2};

// if(first === second ){
//     console.log('they are same...');
// }else{
//     console.log('they are different...');
// }

const first = { a: 5, b:2};
const second = {b: 2, a: 5, c:7};

// const third = second;

// if(second === third){
//     console.log('same');
// }else{
//     console.log('different');
// }

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

// console.log(firstString, secondString);
// if (firstString === secondString){
//     console.log('same');
// }
// else{
//     console.log('different');
// }

function compareObject (first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);

    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first,second);
console.log(isSame);