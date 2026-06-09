# Address Book System Using JavaScript

## Overview

The Address Book System is a JavaScript-based application developed as part of the BridgeLabz JavaScript Practice Problems. The project demonstrates the use of JavaScript Classes, Objects, Arrays, Array Functions, Regular Expressions, Error Handling, and Git Branching workflows.

The application allows users to create, manage, search, update, delete, and sort contact information efficiently.

---

## Features

### UC1 - Create Contact

* Create a Contact class with:

  * First Name
  * Last Name
  * Address
  * City
  * State
  * Zip Code
  * Phone Number
  * Email

### UC2 - Contact Validation

* Validate contact details using Regular Expressions.
* Throw errors for invalid inputs.

### UC3 - Address Book Array

* Create an Address Book array.
* Add multiple contacts to the Address Book.

### UC4 - Edit Existing Contact

* Search a contact by name.
* Update contact details.

### UC5 - Delete Contact

* Find a contact by name.
* Remove the contact from the Address Book.

### UC6 - Count Contacts

* Count total contacts using Array Reduce function.

### UC7 - Prevent Duplicate Entries

* Ensure duplicate contacts are not added.
* Validate using Array functions.

### UC8 - Search by City or State

* Search contacts belonging to a specific city or state.

### UC9 - View Persons by City or State

* Display contacts belonging to a particular city or state.

### UC10 - Count by City or State

* Count the number of contacts in a given city or state.

### UC11 - Sort by Name

* Sort contacts alphabetically by first name.

### UC12 - Sort by City, State, and Zip

* Sort contacts based on:

  * City
  * State
  * Zip Code

---

## Technologies Used

* JavaScript (ES6)
* Node.js
* Git
* GitHub
* Visual Studio Code

---

## Project Structure

```text
Addressbook-js
│
├── Contact.js
├── addressBook.js
└── README.md
```

---

## How to Run

### Clone Repository

```bash
git clone https://github.com/Jaysi1701/Addressbook-js.git
```

### Navigate to Project

```bash
cd Addressbook-js
```

### Execute Program

```bash
node addressBook.js
```

---

## Git Workflow Followed

Each Use Case was developed in a separate branch and merged into the main branch.

```text
main
├── UC1-create-contact-class
├── UC2-add-validations
├── UC3-create-addressbook-array
├── UC4-edit-contact
├── UC5-delete-contact
├── UC6-count-contacts
├── UC7-no-duplicate-contacts
├── UC8-search-person-by-city-state
├── UC9-view-persons-by-city-state
├── UC10-count-by-city-state
├── UC11-sort-by-name
└── UC12-sort-by-city-state-zip
```

---


