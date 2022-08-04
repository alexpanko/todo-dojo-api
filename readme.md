# Backend server API for Todo App

> Backend API for a todo/ task management application

## Usage

Create a .env file in the root of your project and add values/ settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Tech stack 

To build this API I used folowing technology and packages:

### Technology
- NodeJS 
- Express Server
- GraphQL
- MongoDB noSQL data-base 
- Mongoose

### Packages
- [npm nodemon](https://www.npmjs.com/package/nodemon)
- [npm express](https://www.npmjs.com/package/express)
- [npm dotenv](https://www.npmjs.com/package/dotenv)
- [npm morgan](https://www.npmjs.com/package/morgan)
- [npm mongoose](https://www.npmjs.com/package/mongoose)
- [npm colors](https://www.npmjs.com/package/colors)

### API Security
- Prevent NoSQL injection and sanitize data [Express Mongoose Sanitize](https://www.npmjs.com/package/express-mongo-sanitize)
- Security Headers with [Helmet](https://www.npmjs.com/package/helmet)
- Prevent Cross Site Scripting attacs with [XSS-Clean](https://www.npmjs.com/package/xss-clean)
- Rate limiting to max 100 requests from one IP address in 10 min with [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit)
- Protect against HTTP Parameter Pollution attacks with [HPP](https://www.npmjs.com/package/hpp)
- Enable CORS to make API public with [CORS](https://www.npmjs.com/package/cors)

## Demo

The API is live at [todo-dojo-api.herokuapp.com](https://todo-dojo-api.herokuapp.com/)

API documentation with examples [here](https://documenter.getpostman.com/view/10852837/Uzs13mfV)

- Version: 1.0.0
- License: MIT
- Author: Alex Panko