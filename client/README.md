# **CRUD App Frontend**

![REACT](https://img.shields.io/badge/React-js-61DAFB?style=for-the-badge&logo=React)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=JavaScript)
![TAILWINDCSS](https://img.shields.io/badge/TAILWIND-CSS-06B6D4?style=for-the-badge&logo=TailwindCSS)

This is a web application which allows you to add, update, delete, and view user data. The frontend of the application is built using **React.js**.

## **Getting Started**
### Prerequisites
- Node.js and npm should be installed on your machine.

### Installation
1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server.
The application will be served at `http://localhost:3000`.

## Usage
`Form.js`: This component renders a form for adding or updating user data. It accepts the `fetchUsersData` function and `BASE_URL` as props. `BASE_URL` constant is used as the root URL for all API requests to the backend server. 

`UsersList.js` : This component renders a table of all users data. It accepts the `userData`, `setUserData`, `fetchUsersData`, and `BASE_URL` as props.

`App.js` : This application file renders the Form and UsersList components.

## Axios
Axios is a popular HTTP client for the browser and Node.js. It is used to make HTTP requests to the backend API to fetch or update user data.

## Deployment
The frontend of the application can be deployed to various hosting services like Heroku, Netlify, and Vercel. This **CRUD App** frontend part is deployed on vercel. You can use the npm run build command to build the production-ready code.

## Contributing
Contributions are welcome! Fork the repository and create a pull request to contribute.

