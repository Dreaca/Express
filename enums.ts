// enum Size{
//     Small = 1, //This will start with 1 otherwise it will start from 0
//     Medium,
//     Large
// }

// console.log(Size.Small);

const enum Size{
    Small = 'a',
    Medium = 'b',
    Large ='c' 
}

console.log(Size.Small); // will print 'a'

const mySize: Size = Size.Small;

console.log(mySize);
