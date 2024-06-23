// Day 3
// stack and heap in javasript
// data is two type primitive and non primitive
// memory = stack and Heap
// stack - primitive -variable copy
// heap- non primtive- reference
// let myName = "anshika"
// let myCoName= myName;
// console.log(myCoName)

// let myName = "anshika"
// let myCoName= myName;
// myCoName = "anshu"
// console.log(myCoName)
// console.log(myName)
// output=anshu,Anshika (copy change) give copy not value change copy not original value refrence - heap
// let userOne={
//     email:"fjei.com",
//     upi:  "5465jsadj"
// }
// let userTwo= userOne ##acess 
//     userTwo.email = "anshika.com"
//     console.log(userOne.email);
//     console.log(userTwo.email);
//     output=anshika.com
//     anshika.com


//Day 4
//**String */
// const name= "anshika"
// const repoCount = 50;
// // console.log(name + repoCount); //contenation


// // another way
// //interpolation
// //like placeholder
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);//use of backtext

//another way is usw new keyword
const gameName =  new String("anshika")// string is object
// console.log(gameName[0]);// output=a
// console.log(gameName.__proto__) //output look like empty but there is a value in it.
// console.log(gameName.length)
// console.log(gameName.toUpperCase());//ANSHIKA
// //use charAT to known the position of element . use no.
//use character position using indexof()
const newString=  gameName.substring(0,4)//take 0,1,2,3

console.log(newString) //ansh

const  anotherString= gameName.slice(-6,4)
console.log(anotherString)


// Length: This property returns the length of a string.
// 
// let str = "Hello, World!";
// console.log(str.length); // Output: 13
// toUpperCase: This method returns the string converted to uppercase.

//
// let str = "Hello, World!";
// console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
// charAt: This method returns the character at a specified index in a string.

// 
// let str = "Hello, World!";
// console.log(str.charAt(0)); // Output: "H"
// substring: This method extracts the characters from a string between two specified indices.

// 
// let str = "Hello, World!";
// console.log(str.substring(0, 5)); // Output: "Hello"
// indexOf: This method returns the index of the first occurrence of a specified value in a string.

//
// let str = "Hello, World!";
// console.log(str.indexOf('World')); // Output: 7
// replace: This method replaces a specified value with another value in a string.

// 
// let str = "Hello, World!";
// console.log(str.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"
// split: This method splits a string into an array of substrings based on a specified delimiter.


// let str = "Hello, World!";
// let arr = str.split(", ");
// console.log(arr); // Output: ["Hello", "World!"]
// trim: This method removes whitespace from both ends of a string.


// let str = "   Hello, World!   ";
// console.log(str.trim()); // Output: "Hello, World!"
// includes: This method determines whether a string contains the characters of a specified string.

//
// let str = "Hello, World!";
// console.log(str.includes("World")); // Output: true
// concat: This method concatenates two or more strings.

// 
// let str1 = "Hello";
// let str2 = "World";
// let str3 = str1.concat(", ", str2, "!");
// console.log(str3); // Output: "Hello, World!"

// Length:

//
// let str = new String("Hello, World!");
// console.log(str.length); // Output: 13
// toUpperCase:

// 
// let str = new String("Hello, World!");
// console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
// charAt:

// 
// let str = new String("Hello, World!");
// console.log(str.charAt(0)); // Output: "H"
// substring:

// 
// let str = new String("Hello, World!");
// console.log(str.substring(0, 5)); // Output: "Hello"
// indexOf:

// 
// let str = new String("Hello, World!");
// console.log(str.indexOf('World')); // Output: 7
// replace:

// 
// let str = new String("Hello, World!");
// console.log(str.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"
// split:

// 
// let str = new String("Hello, World!");
// let arr = str.split(", ");
// console.log(arr); // Output: ["Hello", "World!"]
// trim:

// 
// let str = new String("   Hello, World!   ");
// console.log(str.trim()); // Output: "Hello, World!"
// includes:

// 
// let str = new String("Hello, World!");
// console.log(str.includes("World")); // Output: true
// concat:


// let str1 = new String("Hello");
// let str2 = new String("World");
// let str3 = str1.concat(", ", str2, "!");
// console.log(str3); // Output: "Hello, World!"
// When you use the new keyword with String, you create a string object. While this is generally not recommended for simple string operations (because string objects can introduce unexpected behavior compared to string primitives), it works with all the string methods in the same way. In most cases, you would use string literals (primitive strings) for simplicity and performance.



// Certainly! Here are additional string methods, demonstrated using the new String keyword:

// slice: This method extracts a section of a string and returns it as a new string.

// 
// let str = new String("Hello, World!");
// console.log(str.slice(0, 5)); // Output: "Hello"
// toLowerCase: This method returns the string converted to lowercase.

// 

// let str = new String("Hello, World!");
// console.log(str.toLowerCase()); // Output: "hello, world!"
// startsWith: This method checks if the string starts with the specified characters.

// 

// let str = new String("Hello, World!");
// console.log(str.startsWith("Hello")); // Output: true
// endsWith: This method checks if the string ends with the specified characters.

// 
// let str = new String("Hello, World!");
// console.log(str.endsWith("World!")); // Output: true
// repeat: This method returns a new string with a specified number of copies of the original string.

//
// let str = new String("Hello");
// console.log(str.repeat(3)); // Output: "HelloHelloHello"
// padStart: This method pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length. The padding is applied from the start (left) of the current string.

// 
// let str = new String("5");
// console.log(str.padStart(3, "0")); // Output: "005"
// padEnd: This method pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length. The padding is applied from the end (right) of the current string.



// let str = new String("5");
// console.log(str.padEnd(3, "0")); // Output: "500"
// search: This method executes a search for a match between a regular expression and this string object.

// 
// let str = new String("Hello, World!");
// console.log(str.search("World")); // Output: 7
// match: This method retrieves the result of matching a string against a regular expression.

// 
// let str = new String("Hello, World!");
// console.log(str.match(/World/)); // Output: ["World"]
// matchAll: This method returns an iterator of all results matching a string against a regular expression, including capturing groups.

// 
// let str = new String("Hello, World! Hello, JavaScript!");
// let matches = str.matchAll(/Hello/g);
// for (let match of matches) {
//     console.log(match[0]); // Output: "Hello", "Hello"
// }
// codePointAt: This method returns a non-negative integer that is the Unicode code point value of the character at the given position.

// 
// let str = new String("Hello, World!");
// console.log(str.codePointAt(0)); // Output: 72 (Unicode value of 'H')
// fromCharCode: This static method returns a string created from the specified sequence of UTF-16 code units.


// console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: "Hello"
// fromCodePoint: This static method returns a string created by using the specified sequence of code points.


// console.log(String.fromCodePoint(128512)); // Output: "😀"
// These methods provide a wide range of functionalities to manipulate and interact with strings in JavaScript, whether you use string primitives or string objects created with the new String keyword.









