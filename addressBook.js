const Contact = require('./Contact');

let addressBook = [];

function addContact(contact) {

    let isDuplicate = addressBook.some(
        person =>
            person.firstName === contact.firstName &&
            person.lastName === contact.lastName
    );

    if (!isDuplicate) {
        addressBook.push(contact);
    }
}

try {

    addContact(new Contact(
        "John",
        "Doe",
        "AnnaNagar",
        "Chennai",
        "TamilNadu",
        "600001",
        "9876543210",
        "john@gmail.com"
    ));

    addContact(new Contact(
        "David",
        "Smith",
        "MGRoad",
        "Bangalore",
        "Karnataka",
        "560001",
        "9876543211",
        "david@gmail.com"
    ));

    addContact(new Contact(
        "James",
        "Brown",
        "GandhiRoad",
        "Hyderabad",
        "Telangana",
        "500001",
        "9876543212",
        "james@gmail.com"
    ));

    addContact(new Contact(
        "Peter",
        "Wilson",
        "RingRoad",
        "Chennai",
        "TamilNadu",
        "600020",
        "9876543213",
        "peter@gmail.com"
    ));

    console.log("\nBefore Sorting:");

    addressBook.forEach(contact =>
        console.log(contact.toString())
    );

    // UC11 Sort by First Name

    addressBook.sort(
        (person1, person2) =>
            person1.firstName.localeCompare(person2.firstName)
    );

    console.log("\nAfter Sorting By Name:");

    addressBook.forEach(contact =>
        console.log(contact.toString())
    );

} catch (error) {
    console.error(error);
}