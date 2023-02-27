const student = {
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

const output = student.exam();
// console.log(output);

const reExam = student.improveExam('Algebra');
// console.log(reExam);

const treatBirth = student.treatDey(900, 100);
console.log(treatBirth);

const treatMobile = student.treatDey(500, 50);
console.log(treatMobile);