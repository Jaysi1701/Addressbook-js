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
        console.log(`${contact.firstName} added successfully`);
    } else {
        console.log(`Duplicate Contact Found: ${contact.firstName} ${contact.lastName}`);
    }
}

try {

    let contact1 = new Contact(
        "John",
        "Doe",
        "Anna Nagar",
        "Chennai",
        "TamilNadu",
        "600001",
        "9876543210",
        "john@gmail.com"
    );

    let contact2 = new Contact(
        "David",
        "Smith",
        "MGRoad",
        "Bangalore",
        "Karnataka",
        "560001",
        "9876543211",
        "david@gmail.com"
    );

    let contact3 = new Contact(
        "John",
        "Doe",
        "Velachery",
        "Chennai",
        "TamilNadu",
        "600042",
        "9999999999",
        "john.doe@gmail.com"
    );

    addContact(contact1);
    addContact(contact2);
    addContact(contact3); // Duplicate

    console.log("\nAddress Book Contacts:");

    addressBook.forEach(contact =>
        console.log(contact.toString())
    );

    let count = addressBook.reduce(
        (total, person) => total + 1,
        0
    );

    console.log("\nTotal Contacts: " + count);

} catch (error) {
    console.error(error);
}