// function Human(fullName, age) {
//     this.fullName = fullName;
//     this.age = age;

// }
// function Employee(salary, experienceYear, department) {
//     this.salary = salary
//     this.department = department
//     this.experienceYear = experienceYear
// }

// const eldar = new human("eldar eldarov", 20)
// const ilkin = new human("ilkin ilkinov", 21)
// const leman = new human("leman lemanova", 23)
// const tural = new human("tural turalov", 25)
// Object.setPrototypeOf(eldar, new Employee(2000, 3, "IT"))
// Object.setPrototypeOf(ilkin, new Employee(4000, 7, "IT"))
// Object.setPrototypeOf(leman, new Employee(5000, 10, "IT"))
// Object.setPrototypeOf(tural, new Employee(3000, 4, "IT"))
// let employess = [eldar, ilkin, leman, tural]

// task-1
// function volumeOfbox(obj) {
//     return obj.width * obj.length * obj.height
// }

// let a = {
//     width: 2,
//     height: 9,
//     length: 3
// }
// let b = {
//     width: 23,
//     height: 3,
//     length: 3
// }
// console.log(volumeOfbox(a));
// console.log(volumeOfbox(b))

// task-2
// function capitalizeEachWords(sentence) {
//     sentence = sentence.split(" ")
//     for (let i = 0; i < sentence.length; i++) {
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)


//     }

//     return sentence.join(" ")

// }
// console.log(capitalizeEachWords("lorem ipsum dorem"));

// task-3

// function getMaxLengthWords(str) {
//     arr = str.split(" ")
//     let max = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length > max.length) {
//             max = arr[i]
//         }

//     }

//     return max

// }

// console.log(getMaxLengthWords("salam necesen eli"));

// task-4
// function selectOnlyUniqueChars(str) {
//     let result = []
//     for (let i = 0; i < str.length; i++) {
//         if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//             result.push(str[i])

//         }

//     }
//     return result
// }
// console.log(selectOnlyUniqueChars("aaabbbccde"));