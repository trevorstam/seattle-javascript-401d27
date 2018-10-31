## **Lab 12: Express Middleware**

#### Author 
Trevor Stam

### **Lab Assignment**

- create a single resource express API that can handle GET, POST, and PUT requests
    - Choose your own resource, as long as it's not Note or Person
    create an error-middleware module to handle errors and use it in your server file
    - use a cors-middleware module that will allow for public use of your API
    - create methods for filesystem and/or memory modules to handle GET, POST, and PUT operations.
    - create a series of acceptance tests to test your GET, POST, and PUT routes
        - hint: you'll want to use the before and after hooks provided by jest in order to create a test note and delete the note after the test has completed

### **Node modules**
dotenv, jest, eslint, supertest, babel-env, babel-eslint, babel-register, cors, express, require-dir

### **Getting Started**
Fork and clone repo. Then npm i to retrieve all dependencies and install all modules in package.json. Then start your server with nodemon or node index.js or npm start

### **Sources**
Node.js documentation, JB Tellez, Allie Grampa, Jen Carrigan, Katherine Smith
