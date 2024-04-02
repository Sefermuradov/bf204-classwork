function Human(name, surname, age, isMale = true) {
    this.name = name,
        this.surname = surname,
        this.age = age,
        this.isMale = isMale
    this.getFullName = function () {
        return this.name[0].slice(0, 1).toUpperCase() + "." + this.surname.toUpperCase()


    }

}

// let sefer = new Human("sefer", "Muradov", 20, false)
// console.log(sefer);
// console.log(sefer.getFullName())

// function Student(university, faculty, major, degree, course, gpa = 0) {
//     this.university = university,
//         this.faculty = faculty,
//         this.major = major,
//         this.degree = degree,
//         this.course = course,
//         this.gpa = gpa
//     this.studentID = function () {
//         return this.university.slice(0, 3).toUpperCase() + "_" + this.faculty.slice(0, 3).toUpperCase() + parseInt(Math.random() * 10000)
//     }


// }
// const sefer = new Student("sefer", "muradov", 20)
// const nicat = new Student("sefer", "muradov", 20)
// const ilkin = new Student("sefer", "muradov", 20)
// const elnur = new Student("sefer", "muradov", 20)
// const aqil = new Student("sefer", "muradov", 20)
// const nurlan = new Student("sefer", "muradov", 20)
// console.log(sefer)
// console.log(sefer.studentID())
// Object.setPrototypeOf(sefer, new Student("BDU", "TETBIQ", "KOMPUTER ELMELRI", "BAKALAVR", 3, 5.5))
// Object.setPrototypeOf(nicat, new Student("BDU", "TETBIQ", "KOMPUTER ELMELRI", "BAKALAVR", 4, 4.5))
// Object.setPrototypeOf(ilkin, new Student("BDU", "TETBIQ", "KOMPUTER ELMELRI", "BAKALAVR", 1, 5.5))
// Object.setPrototypeOf(elnur, new Student("BDU", "TETBIQ", "KOMPUTER ELMELRI", "BAKALAVR", 3, 5))
// Object.setPrototypeOf(aqil, new Student("BDU", "TETBIQ", "KOMPUTER ELMELRI", "BAKALAVR", 2, 3.5))
// Object.setPrototypeOf(nurlan, new Student("BDU", "TETBIQ", "KOMPUTER ELMELRI", "BAKALAVR", 2, 4))


// function getLetter(sentence) {
//     let arr = []
//     for (let i = 0; i < sentence.length; i++) {
//         arr.sort()

//     }
//     return sentence[sentence.length - 1]
// }
// console.log(getLetter("abcd"))