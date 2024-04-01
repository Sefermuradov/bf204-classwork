// task1
// function printFullName(firstName, lastName) {
//     return `i am ${firstName} ${lastName}`

// }
// console.log(printFullName("sefer", "muradov"))

// task2
// function square(number) {
//     return `${number * number}`
// }
// console.log(square(5))

// task3
// function sum(num1, num2) {
//     return num1 + num2;

// }
// console.log(sum(2, 3));

// function multiply(num1, num2) {
//     return num1 * num2;

// }
// console.log(multiply(2, 3));

// function subtruct(num1, num2) {
//     return num1 - num2;

// }
// console.log(subtruct(2, 3));

// function divide(num1, num2) {
//     return num1 / num2;

// }
// console.log(divide(2, 3));

// task4
// function calculator(num1, num2, op) {
//     if (op === "+") {
//         return num1 + num2
//     }
//     else if (op === "-") {
//         return num1 - num2

//     }
//     else if (op === "*") {
//         return num1 * num2

//     } else if (op === "/") {
//         return num1 / num2

//     }
//     else {
//         return `bele bir eded yoxdur`
//     }

// }
// console.log(calculator(2, 5, "+")); //7
// console.log(calculator(2, 5, "*")); //10
// console.log(calculator(2, 5, "/")); //0.4
// console.log(calculator(2, 5, "-")); //-3

// task5
// const getSum = (array) => {
//     return array[0] + array[array.length - 1]

// };
// console.log(getSum([1, 2, 3])); // 4
// console.log(getSum([80, 5, 58, 17, 100])); // 180
// console.log(getSum([15, -500, 0, 50])); //65

// task6
// function getSum(array) {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     return sum
// }
// console.log(getSum([15, -500, 0, 50])); //65

// task7
// function getSum(array) {
//     let max = array[0]
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//     return max

// }
// console.log(getSum([15, -500, 0, 50]));

// task9
// function findElement(array, number) {
//     let bool = true
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {
//             bool = false
//         }
//     }


//     return bool ? "yox" : "var"

// }
// console.log(findElement([33, 28, 45, 17], 45)); // 45 array elemenlərindən biridir
// console.log(findElement([33, 28, 45, 17], 38)); // 38 array elementləri arasında yoxdur
// console.log(findElement(["a", "g", "y", "d"], "d")); // d array
