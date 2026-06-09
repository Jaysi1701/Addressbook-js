class Contact {

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {

        let nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        let addressRegex = /^[A-Za-z ]{4,}$/;
        let zipRegex = /^[0-9]{6}$/;
        let phoneRegex = /^[0-9]{10}$/;
        let emailRegex = /^[a-zA-Z0-9]+([._+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

        if (!nameRegex.test(firstName))
            throw "Invalid First Name";

        if (!nameRegex.test(lastName))
            throw "Invalid Last Name";

        if (!addressRegex.test(address))
            throw "Invalid Address";

        if (!addressRegex.test(city))
            throw "Invalid City";

        if (!addressRegex.test(state))
            throw "Invalid State";

        if (!zipRegex.test(zip))
            throw "Invalid Zip Code";

        if (!phoneRegex.test(phoneNumber))
            throw "Invalid Phone Number";

        if (!emailRegex.test(email))
            throw "Invalid Email";

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