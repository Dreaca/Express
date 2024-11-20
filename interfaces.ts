interface Person{
    firstName: string,
    age: number
}
const person1  ={
    firstName: 'John',
    age: 30,
    hobbies:{
        sports: "football"
    }
}
console.log(person1);

const {firstName, age,hobbies} = person1 // destructure the person
const{sports} = hobbies;
console.log(hobbies);
console.log(sports);

