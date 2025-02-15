## Sprint 8 Project, Uliana Maliutina

## Description
This project involves writing automated end-to-end (E2E) tests to validate the functionality of the Urban Routes taxi ordering application. The goal is to simulate a user's journey through the process of ordering a taxi, ensuring that all critical features work as expected.

## Technologies and Techniques Used

### Technologies
- **WebdriverIO**: For browser automation and test execution.
- **Mocha**: As the test framework for organizing and running tests.
- **Chai**: For writing assertions and validating test outcomes.
- **JavaScript**: The programming language used for writing test scripts.
- **Node.js**: The runtime environment for executing JavaScript code.
- **npm**: The package manager for managing dependencies and running scripts.

### Techniques
- **Page Object Model (POM)**: To separate test logic from page-specific logic.
- **Helper Functions**: For generating test data and performing common tasks.
- **Dynamic Element Handling**: To interact with dynamic elements like modals and dropdowns.
- **User Interaction Simulation**: Simulating user actions like clicking, typing, and focusing.
- **Asynchronous Testing**: Using `async/await` to handle asynchronous operations.
- **Assertions**: Validating test outcomes using Chai assertions.
- **Modular Code Structure**: Breaking down test logic into reusable modules.
- **Cross-Browser Testing**: Running tests on different browsers.
- **Debugging with `browser.pause`**: Pausing test execution for debugging.
- **Optional Test Cases**: Handling complex scenarios like waiting for driver info.

## How to run tests:

1. Clone the repository: git clone https://github.com/username/hm08-qa-us.git
cd hm08-qa-us
2. Install dependencies: npm install
3. Update the wdio.conf.js file with the correct API URL: module.exports = {
    baseUrl: 'https://cnt-3a1870d9-8c09-47e1-8888-52cccaf5c3ce.containerhub.tripleten-services.com',
};
4. Execute the test suite using WebdriverIO: npm run wdio