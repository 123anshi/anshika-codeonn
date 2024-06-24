//....Date And Time....// DAY 5

// let myDate = new Date();
// console.log(myDate.toString());//Mon Jun 24 2024 03:13:50 GMT+0000 (Coordinated Universal Time)

// //coversion how its use
// // console.log(myDate.toLocalString());
// console.log(myDate.toLocaleString());//6/24/2024, 3:13:50 AM
// console.log(myDate.toDateString());//Mon Jun 24 2024
// console.log(typeof myDate)//object

// let creat = new Date("01-14-2023");
// console.log(creat.toString());

// //........Time......//

// let time = Date.now()
// // console.log(time)//in millisecond
// // console.log(creat.getTime()); //1646787956854
// console.log(Math.floor(Date.now()/1000)) //divide by 1000 to convert into second but problem is decimal value comm then use math.floor

let newDate = new Date()
console.log(newDate.getMonth());//start from 0...day also used...getDay
//customize
newDate.toLocaleString("default", {
    weekday:"long"
})

