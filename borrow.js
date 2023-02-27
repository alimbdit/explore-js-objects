const kodomAli = {
    name: 'Kodom Ali',
    money: 4000,
    sub: ['calculus', 'Algebra', 'Geometry'],
    exam: function(){
        return this.name + " Participating in the exam!!!";
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement on ${subject}`;
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
} 

// console.log(kodomAli.exam());

const badamAli = {
    name: 'badam ali',
    money: 8000,
}

const badamMoney = kodomAli.treatDey.call(badamAli, 500, 50);
console.log(badamMoney);

const remainingMoney = kodomAli.treatDey.apply(badamAli, [400, 50]);
console.log(remainingMoney);


const badamAliMoney = kodomAli.treatDey.bind(badamAli);
const remaining = badamAliMoney(1000,50);
console.log(remaining);