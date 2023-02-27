const kodomAli = {
    name: 'Kodom Ali',
    money: 4000,
    sub: ['calculus', 'Algebra', 'Geometry'],
    exam: function(){
        console.log(this);
        return this.name + " Participating in the exam!!!";
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement on ${subject}`;
    },
    examArrow: () => {
        console.log(this);
    },
    arrowNested: () =>{
        const arrow = () => {
            console.log(this);
        };
        arrow();
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
} 

const badamAli = {
    name: 'kacha badam ali',
    money: 8000,
}

kodomAli.exam();

badamAli.exam = kodomAli.exam;
badamAli.exam();


function clickHandler(){
    console.log(this);
}

document.getElementById('click-2').addEventListener('click', function(){
    console.log(this);
})

