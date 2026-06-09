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

    // Sort By City

    console.log("\n===== SORT BY CITY =====");

    let citySorted = [...addressBook].sort(
        (a, b) => a.city.localeCompare(b.city)
    );

    citySorted.forEach(contact =>
        console.log(contact.toString())
    );

    // Sort By State

    console.log("\n===== SORT BY STATE =====");

    let stateSorted = [...addressBook].sort(
        (a, b) => a.state.localeCompare(b.state)
    );

    stateSorted.forEach(contact =>
        console.log(contact.toString())
    );

    // Sort By Zip

    console.log("\n===== SORT BY ZIP =====");

    let zipSorted = [...addressBook].sort(
        (a, b) => a.zip.localeCompare(b.zip)
    );

    zipSorted.forEach(contact =>
        console.log(contact.toString())
    );

} catch (error) {
    console.error(error);
}