# **CRUD App Backend**

This is the backend for a CRUD (Create, Read, Update, Delete) web application that allows users to manage a list of users in a MongoDB database. This application is built with Node.js, Express.js, and Mongoose.

## **Getting Started**
To get started with this project, you will need to have Node.js and MongoDB installed on your machine.

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file in the root directory of the project with the following contents:

```
PORT=<port_number>
MONGO_URI=<mongodb_connection_string>
```
Replace `<port_number>` with the port number you want the server to run on (e.g. 4000), and `<mongodb_connection_string>` with the connection string for your MongoDB instance.
4. Start the server by running `npm start`.

## **API Endpoints**
### `GET /`

Returns a simple welcome message.
### `POST /createUser`
Creates a new user in the database.

Request Body
```
{
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```
Response Body
```
{
  "success": true,
  "message": "User created successfully",
  "user": {
    "_id": "6145e9e5c5d5b5a5c5ef5b5c",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "__v": 0
  }
}
```
### `GET /getUsers`
Returns a list of all users in the database.

Response Body
```
{
  "success": true,
  "users": [
    {
      "_id": "6145e9e5c5d5b5a5c5ef5b5c",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "__v": 0
    },
    {
      "_id": "6145e9e5c5d5b5a5c5ef5b5d",
      "name": "Jane Doe",
      "email": "janedoe@example.com",
      "__v": 0
    }
  ]
}

```
### `PUT /editUser/:id`
Updates a user with the specified ID.

Request Body
```
{
  "name": "John Smith",
  "email": "johnsmith@example.com"
}
```

Response Body
```
{
  "success": true,
  "message": "User updated successfully"
}
```
### `DELETE /deleteUser/:id`
Deletes a user with the specified ID.

Response Body
```
{
  "success": true,
  "message": "User deleted successfully"
}
```

## **Folder Structure**

```
.
├── controllers
│   └── userControllers.js
├── models
│   └── userModel.js
├── routes
│   └── userRoutes.js
├── config
│   └── db.js
├── app.js
└── server.js
```

- `controllers` folder contains the controllers that handle the app's HTTP requests and responses.
- `models` folder contains the Mongoose models for the app's data.
- `routes` folder contains the Express routes that define the app's API.
- `config` folder contains configuration files for the app (in this case, just the database connection).
- `app.js` is the main application file that sets up the Express app and its middleware.
- `server.js` is the entry point for the app that starts the server and listens for incoming requests.

## **Contributing**
If you'd like to contribute to this project, please fork the repository and make your changes in a separate branch. Once you've made your changes, submit a pull request and a we will review your changes.
