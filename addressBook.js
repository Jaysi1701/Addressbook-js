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

    let contact3 = new Contact(
        "James",
        "Brown",
        "GandhiRoad",
        "Hyderabad",
        "Telangana",
        "500001",
        "9876543212",
        "james@gmail.com"
    );

    addressBook.push(contact1);
    addressBook.push(contact2);
    addressBook.push(contact3);

    console.log("Before Deletion:");

    addressBook.forEach(contact =>
        console.log(contact.toString())
    );

    // UC5 Delete Contact

    let index = addressBook.findIndex(
        contact =>
            contact.firstName === "David" &&
            contact.lastName === "Smith"
    );

    if (index !== -1) {
        addressBook.splice(index, 1);
        console.log("\nContact Deleted Successfully");
    }

    console.log("\nAfter Deletion:");

    addressBook.forEach(contact =>
        console.log(contact.toString())
    );

} catch (error) {
    console.error(error);
}