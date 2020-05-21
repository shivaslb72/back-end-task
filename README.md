# Back-end-task

Prerequisites
1. NodeJS
2. MongoDB

How to setup the server
1. run npm install command in the file location to install all the required dependencies
2. run mongod on command prompt to run the mongo server
3. add your database url to config.js file
3. run nodemon index.js to run the node server and server should start on PORT 3032 and will get a message that 'Server Runing on 3001' and "Server is connected to db" then you are ready to go.


Workflow of the Application
1. Adding Category
URL: http://localhost:3032/category
Method: POST
Content-Type: application/json

Example of Body: {
	"name":"men"
}
Description: Send the request in POST method with mentioned URL with content type and mentioned body. After sending the request you must get response.
Example Response: {
    "_id": "5ec62c8a76cc6f2b60c09a02",
    "name": "men",
    "__v": 0
}

2. Get all Category
URL: http://localhost:3032/category
Method: GET
Description: Send the request in GET method with mentioned URL . After sending the request you must get response.
Example Response: [
    {
        "_id": "5ec60e3fe61f931294195e39",
        "name": "mens",
        "__v": 0
    },
    {
        "_id": "5ec62c8a76cc6f2b60c09a02",
        "name": "womens",
        "__v": 0
    }
]

3. Updating Category
URL: http://localhost:3032/category/5ec60e3fe61f931294195e39
Method: PUT
Content-Type: application/json

Example of Body: {
	"name":"men"
}
Description: Send the request in PUT method with mentioned URL with content type and mentioned body. After sending the request you must get response.
Example Response: {
    "_id": "5ec60e3fe61f931294195e39",
    "name": "men",
    "__v": 0
}

5. Delete Category
URL: http://localhost:3032/category/:id
Method: DELETE
Description: Send the request in DELETE method with mentioned URL. After sending the request you must get response.
Response: returns deleted category


1. Adding Product
URL: http://localhost:3032/product
Method: POST
Content-Type: application/json

Example of Body: {
    "name": "shirts",
    "price": 200,
    "category": "5ec60e3fe61f931294195e39"
}
Description: Send the request in POST method with mentioned URL with content type and mentioned body. After sending the request you must get response.
Response: {
    "category": [
        {
            "_id": "5ec60e3fe61f931294195e39",
            "name": "mens"
        }
    ],
    "_id": "5ec612345fa7d52430dd3f1d",
    "name": "shirts",
    "price": 200,
    "__v": 0
}



2. Get all Product by Category
URL: http://localhost:3032/product/5ec612345fa7d52430dd3f1d
Method: GET
Description: Send the request in GET method with mentioned URL. After sending the request you must get response.
Response: [
    {
        "category": [
            {
                "_id": "5ec60e3fe61f931294195e39",
                "name": "mens"
            }
        ],
        "_id": "5ec612345fa7d52430dd3f1d",
        "name": "shirts",
        "price": 200,
        "__v": 0
    },
    {
        "category": [
            {
                "_id": "5ec60e3fe61f931294195e39",
                "name": "mens"
            }
        ],
        "_id": "5ec6311a76cc6f2b60c09a03",
        "name": "pants",
        "price": 200,
        "__v": 0
    }
]

3. Delete product
URL: http://localhost:3032/product/:id
Method: DELETE
Description: Send the request in DELETE method with mentioned URL. After sending the request you must get response.
Response: returns deleted product
