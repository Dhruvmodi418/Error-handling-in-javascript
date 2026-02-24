# Error-handling-in-javascript
Error handling in javascript

JavaScript Error Handling & Validation
This project demonstrates how to make code more resilient by anticipating user input errors and managing execution flow when runtime errors occur.

1. Input Validation and Custom Errors
The script uses prompt() to gather data and validates it immediately to prevent logical errors.

isNaN() Check: The code verifies if the inputs are actual numbers before proceeding.

Throwing Errors: If the validation fails, a SyntaxError is manually triggered using the throw keyword to stop execution with a specific message.

2. The try...catch...finally Pattern
The main() function illustrates how to handle unexpected JavaScript errors (like a ReferenceError from an undefined variable) without crashing the entire script.
