//....Date And Time....//

let myDate = new Date();
console.log(myDate.toString());//Mon Jun 24 2024 03:13:50 GMT+0000 (Coordinated Universal Time)

//coversion how its use
// console.log(myDate.toLocalString());
console.log(myDate.toLocaleString());//6/24/2024, 3:13:50 AM
console.log(myDate.toDateString());//Mon Jun 24 2024
console.log(typeof myDate)//object

let creat = new Date("01-14-2023");
console.log(creat.toString());

//........Time......//

let time = Date.now()
console.log(time)//in millisecond
console.log(creat.getTime());

