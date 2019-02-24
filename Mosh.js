// JavaScript source code
constant person = {
    name: "Nabeel ",
    walk() {
        Console.log(this);
    }
};
person.walk();
const walk = person.walk;
walk();

//window