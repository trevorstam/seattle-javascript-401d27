## Lab 09 : Vanilla REST API

#### Author
Trevor Stam

### Feature Tasks

- continue working on your http server from the previous class
- create an HTTP server using the native NodeJS http module
- create an HTTP server using the native NodeJS http module
- create a custom parser module that:
    - uses promises to parse the JSON body of POST and PUT requests
    - uses the NodeJS url and querystring modules to parse the request url
- create a router constructor that allows you to register custom routes for GET, POST, PUT, and DELETE requests
- create a data model constructor that creates a simple resource (notes) with at least 3 properties
    - include an id property that is set to a unique id (hint: you'll need to use node-uuid)
    - include two additional properties of your choice (ex: name, content, etc.)
- create a data model storage interface that can store data through different storage mechanisms.
    - create storage modules for in-memory and file-system storage

### Node modules
Jest, EsLint, uuid, dotenv
