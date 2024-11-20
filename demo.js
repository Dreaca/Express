var person1 = {
    firstName: 'John',
    age: 30,
    hobbies: {
        sports: "football"
    }
};
console.log(person1);
var firstName = person1.firstName, age = person1.age, hobbies = person1.hobbies;
var sports = hobbies.sports;
console.log(hobbies);
console.log(sports);
