![CF](http://i.imgur.com/7v5ASc8.png) 16: Basic Auth
===

## Submission Instructions
  * Follow standard lab submission instructions using starter code in lab folder.
## Learning Objectives  
* students will be able to create basic authorization middleware
* students will be able to test basic authorization for signup/signin routes

## Requirements

## Feature Tasks

* create an HTTP server using `express`
* using `mongoose`, create a **User** model with the following properties and options:
  * `username` - *required and unique*
  * `email` - *required and unique*
  * `password` - *required - this must be hashed and can not stored as plain text*
* use the **express** `Router` to create a custom router for allowing users to **sign up** and **sign in**
* use the **npm** `dotenv` module to house the following environment variables:
  * `PORT`
  * `MONGODB_URI`
  * `APP_SECRET` *(used for signing and verify tokens)*

## Server Endpoints
### `/api/signup`
* `POST` request
* the client should pass the username and password in the body of the request
* the server should respond with a token (generated using `jwt`)
* the server should respond with **400 Bad Request** to a failed request

### `/api/signin`
* `GET` request
* the client should pass the username and password to the server using a `Basic:` authorization header
* use middleware to parse the auth header for username/password
* perform some basic validation
* the server should respond with a token for authenticated users
* the server should respond with **401 Unauthorized** for non-authenticated users

## Tests
* create a test that will ensure that your API returns a status code of **404** for any routes that have not been registered
* `/api/signup`
* `POST` - test **400**, if no request body has been provided or the body is invalid
* `POST` - test **200**, if the request body has been provided and is valid
* `/api/signin`
* `GET` - test **401**, if the user could not be authenticated
* `GET` - test **200**, responds with token for a request with a valid basic authorization header
