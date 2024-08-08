0x02. ES6 Classes
Overview
This project focuses on the implementation of ES6 classes in JavaScript. The goal is to understand how to define and extend classes, add methods, use static methods, and apply metaprogramming and symbols.

Setup
Install NodeJS 12.11.x:
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

Install Jest, Babel, and ESLint:
Ensure package.json, babel.config.js, and .eslintrc.js are in your project directory.
Run npm install to install dependencies.

Project Tasks
0. You used to attend a place like this at some point
Implement a ClassRoom class with a maxStudentsSize attribute.
1. Let's make some classrooms
Implement a function initializeRooms that returns an array of ClassRoom objects.
2. A Course, Getters, and Setters
Implement a HolbertonCourse class with attributes name, length, and students. Add getters and setters for each attribute.
3. Methods, static methods, computed methods names..... MONEY
Implement a Currency class with attributes code and name. Add a method displayFullCurrency.
4. Pricing
Implement a Pricing class with attributes amount and currency. Add methods displayFullPrice and a static method convertPrice.
5. A Building
Implement an abstract Building class with an attribute sqft. Ensure any extending class overrides the evacuationWarningMessage method.
6. Inheritance
Implement a SkyHighBuilding class extending Building. Add an attribute floors and override the evacuationWarningMessage method.
7. Airport
Implement an Airport class with attributes name and code. The default string description should return the airport code.
8. Primitive - Holberton Class
Implement a HolbertonClass with attributes size and location. When cast into a number, it should return size; when cast into a string, it should return location.
9. Hoisting
Fix and implement the HolbertonClass and StudentHolberton classes.
10. Vroom
Implement a Car class with a cloneCar method that returns a new object of the class using ES6 symbols.
11. EVCar
Implement an EVCar class extending Car. Ensure cloneCar returns an instance of Car instead of EVCar.
Repository
GitHub Repository: alx-frontend-javascript
Directory: 0x02-ES6_classes

