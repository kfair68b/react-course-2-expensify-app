// Object Destructuring

// const person = {
//     name: "Kevin",
//     age: 50,
//     location: {
//         city: 'Toronto',
//         temp: 32
//     }
// }

// const {name = 'Anonymous', age, location} = person;

// console.log(`${name} feels like ${age}`)

// const {temp: temperature, city} = location;

// if (temperature && city){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'self-published'} = book.publisher;

// console.log(publisherName); //Penguin or self-publish

// Array Destructuring

const address = ['123 Main St.','Toronto','ON','M5M 2E9'];

const [,city,state = 'Manitoba'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['grilled cheese','$1.99','$2.99','$3.50'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)