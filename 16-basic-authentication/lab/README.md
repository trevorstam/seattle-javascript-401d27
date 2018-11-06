## Lab 16 : Basic Authorization

#### Author
Trevor Stam

### Feature Tasks
* create an HTTP server using `express`
* using `mongoose`, create a **User** model with the following properties and options:
  * `username` - *required and unique*
  * `email` - *required and unique*
  * `password` - *required - this must be hashed and can not stored as plain text*
* use the **express** `Router` to create a custom router for allowing users to **sign up** and **sign in**

### Dependencies
babel-core, babel-env, babel-eslint, babel-jest, babel-polyfill, babel-register, bcrypt, cors, dotenv, eslint, express, jest, jsonwebtoken, mongodb-memory-server,mongoose, supertest

### Getting Started
- Git fork and clone repo
- Run server with nodemon or node index.js
- Connect to mongodb 

### Sources
Node.js docs, mongoose docs, JB Tellez, Katherine Smith