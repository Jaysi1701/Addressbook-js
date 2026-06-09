const Contact = require('./Contact');

let addressBook = [];

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

    addressBook.push(contact1);
    addressBook.push(contact2);

    console.log("Before Editing:");
    addressBook.forEach(contact =>
        console.log(contact.toString())
    );

    // UC4 - Find and Edit Contact

    let person = addressBook.find(
        contact =>
            contact.firstName === "John" &&
            contact.lastName === "Doe"
    );

    if (person) {
        person.address = "Velachery";
        person.city = "Chennai";
        person.state = "TamilNadu";
        person.zip = "600042";
        person.phoneNumber = "9999999999";
        person.email = "john.doe@gmail.com";
    }

    console.log("\nAfter Editing:");
    addressBook.forEach(contact =>
        console.log(contact.toString())
    );

} catch (error) {
    console.error(error);
}