class Contact {

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return `
First Name   : ${this.firstName}
Last Name    : ${this.lastName}
Address      : ${this.address}
City         : ${this.city}
State        : ${this.state}
Zip          : ${this.zip}
Phone Number : ${this.phoneNumber}
Email        : ${this.email}
`;
    }
}

module.exports = Contact;