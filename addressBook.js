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
        "Chennai",
        "TamilNadu",
        "600020",
        "9876543212",
        "james@gmail.com"
    ));

    addContact(new Contact(
        "Peter",
        "Wilson",
        "RingRoad",
        "Hyderabad",
        "Telangana",
        "500001",
        "9876543213",
        "peter@gmail.com"
    ));

    // Search by City

    let personsInCity = addressBook.filter(
        person => person.city === "Chennai"
    );

    console.log("\nPersons in Chennai:");

    personsInCity.forEach(person =>
        console.log(person.firstName + " " + person.lastName)
    );

    // Search by State

    let personsInState = addressBook.filter(
        person => person.state === "TamilNadu"
    );

    console.log("\nPersons in TamilNadu:");

    personsInState.forEach(person =>
        console.log(person.firstName + " " + person.lastName)
    );

} catch (error) {
    console.error(error);
}