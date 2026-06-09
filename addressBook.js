const Contact = require('./Contact');

let person1 = new Contact(
    "John",
    "Doe",
    "Anna Nagar",
    "Chennai",
    "Tamil Nadu",
    "600001",
    "9876543210",
    "john@gmail.com"
);

console.log(person1.toString());