
//function firstFunction(){
//age = prompt("Enter your age");
//name = prompt("Enter your name");
//school = prompt("Enter your school");
//number = prompt("Enter a number");

//alert("thank you for your answer");

//let inputnumber = 

// document.write(`
// <p>Age: ${age} </p>
// <p>name: ${name} </p>
// <p>: ${school} </p>
// <p>: ${number * 3} </p>
// `);


// function taxCalc(incomes){
//     //let number = prompt("Enter a number");
//     return incomes*.30;
// }

// function ssnAccount(){
//     let taxes=taxCalc(100000);
//     console.log(taxes);
// }



let registerlifts=[]

function lifts(bench,squat,deadlift){
    this.bench=bench;
    this.squat=squat;
    this.deadlift=deadlift;
}

let p1 = new lifts("100lbs","110lbs","120lbs");
let p2 = new lifts("110lbs","120lbs","130lbs");
let p3 = new lifts("120lbs","130lbs","140lbs");
let p4 = new lifts("130lbs","140lbs","150lbs");


registerlifts.push(p1,p2,p3,p4);

for(let i=0;i<4;i++){
    document.write(`<p> ${registerlifts[i].bench} </p>`);
}




