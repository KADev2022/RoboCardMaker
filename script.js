const parentElement = document.querySelector(".parentElement");
const robotImage = document.querySelector("#robotImage");
const setName = document.querySelector("#setName");
const btnMakeRobot = document.querySelector("#btnMakeRobot");

// Product class for creating an object
class Person {
    // Constructing the Person object
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        //console.log("Hello my creator, you named me " + this.name + " it looks like I am " + this.age + " years old");
        console.log(`Hello my creator, you named me ${this.name} it looks like I am ${this.age} years old`);
    }
}

let person1 = new Person("Kazi Arham", 20);
let person2 = new Person("Jerome Morales", 30);

person1.introduce();
person2.introduce();