![cf](http://i.imgur.com/7v5ASc8.png) 02: Tools and Context
=====================================

## Learning Objectives
* Students will be able to create npm scripts for automating command line tasks
* Students will be able to handle thrown errors through the use of `try` and `catch`
* Students will be able to interpret the different types of errors in Javascript
* Students will be able to determine and describe the runtime complexity of an algorithm
* Students will understand the difference between a constructor function, a factory function, and a class.
* Students will be able to identify and explain the qualities of imperative and functional code
* Students will be able to implement a functional, array-like, list with `map`, `filter`, `reduce`, and `forEach` methods

## Outline

### package.json
The `package.json` file is used to describe and configure a NodeJS package. The only two fields that are required by a package.json are `name` and `version` but we often use `npm init` or `npm init -y` to automate the creation of this file. If a package has external dependencies, they are listed by name and version under the fields `dependencies` and `devDependencies`. If the package depends on an external package to run, the external package should be listed under `dependencies`. If the external package is only needed in development (like a testing framework), it should be listed under `devDependencies`. `package.json` files can have a `scripts` field where keys can be associated with unix commands. This gives us the ability to create custom automation scripts.  NPM scripts have the added benefit that they can run any command line utility (CLI) defined in a dependency, without globally installing the CLI on you operating system.

### Semantic Versioning
The NodeJS/NPM community follows semantic versioning (semver). Semantic versioning describes how to manage version changes to a software product. Semver formats the version number using a `MAJOR.MINOR.PATCH` construct. You should change a MAJOR version when you make incompatible API changes, a MINOR version when you add functionality in a backwards-compatible manner, or a PATCH version when you make backwards-compatible bug fixes.

### Errors
Error messages are super important tools for debugging broken code. Javascript has many built in error messages, but you can also define your own errors in your programs. It is important to not forget that errors will happen in production. Error logs are kept in order to fix bugs in productions. Writing good error messages is critical for finding and fixing bugs in deployed applications.

### Writing Good Error Messages
A great error message should have the following features
* a timestamp so that a timeline of the error can be made
* a message about the problem that occurred
* a message about the cause of the problem
* a consistent format (so that it can be parsed and searched)
* a severity level (low, med high) or (0 - 10)

``` javascript
// creating a smart error
class Bug extends Error {
  constructor({problem, cause, level=0, timestamp=new Date().toISOString()}){
    super(`__ERROR__ ${problem}: ${cause} (LEVEL ${level}) (TIMESTAMP ${timestamp})`)
    this.problem = problem
    this.cause = cause
    this.level = level
    this.timestamp = timestamp
  }
}

let error = new Bug({problem: 'cannot create user', cause: 'requires password'})
```

### Handling Thrown Errors
Javascript functions can throw errors. Throwing an `Error` is a great way to force developers to use a function correctly. Un-handled errors will often crash Javascript and stop program execution. This is referred to as *failing fast*. The idea is that the sooner the code fails, the sooner a developer will find bugs and fix them. Though throwing errors is a useful feature of the language itself, programs like servers need a way to continue running in spite of bugs in the code. Javascript has a `try {} catch (error) {}` syntax for handling this.

``` javascript
let userInput = '{'
try {
 let data = JSON.parse(userInput)
 // do something with data
} catch(e) {
  console.error(e)
}
```

### Error Cheat Sheet
| Type |  Reason |
| --- | --- |
| Error | generic error |
| ReferenceError | an attempt was made to access a variable that is not defined |
| SyntaxError | the javascript is not valid |
| TypeError | a provided argument was no the allowable type |
| SystemError | a NodeJS error that occurs when a system error has occurred |

### System Error Cheat Sheet
* `EACCESS` - an attempt to access a file without the right permissions
* `EADDRINUSE` - an attempt to start a server on a PORT that is already in use
* `ECONNREFUSED` - a connection was deliberately refused by the target machine
* `ECONNRESET` - a connection was forcibly closed by a peer
* `EEXIST` - a file exists and the attempted action required that it didn't
* `EISDIR` - an action expected to act on a file but found a directory
* `EMFILE` - too many files were open for your operating system to handle
* `ENOENT` - an action expected a file, but did not find one
* `ENOTDIR` - an action expected a directory, but found something else
* `ENOTEMPTY` - an action expected an empty directory, but found one with data in it
* `EPERM` - an attempt to do something that you currently don't have permissions to do
* `EPIPE` - an attempt to write data to a connection that had been closed

### Context
By default, when a Javascript function belongs to an object, it is called a method. The object the method belongs to is called the methods **context**. In a function, the keyword `this` points to it's context.

### Functional Programming
