# API Building for Orizon Travel

Orizon Travel is a sustainable travel agency focused on providing and promoting travel experiences that highlight the value of different countries and their cultures.

> "Consciousness is the key to a peaceful world"  
> — Orizon Travel

## Tech Stack

**Backend Language:**
- NodeJs

**Libraries:** 
- Express
- Mongoose
- Dotenv
- Nodemon

**Database configuration:**
- MongoDB

### Directory Structure

- **`/src`**: Contains all the core files needed to build the server and implement the application logic.
- **`/src/controller`**: Holds the controllers responsible for managing user, order, and product creation, modification, and deletion.
- **`/src/models`**: Contains the Mongoose schema models used to define the collections.
- **`/src/routes`**: Defines all the endpoint routes, linking each controller (user, product, order) to its corresponding route.
- **`/src/app.js`**: Sets up the main application configuration.
- **`/src/database.js`**: Establishes the connection to the database.
- **`/src/server.js`**: Configures and starts the server.

## API Capabilities

### User Management

- **User Creation (name, surname, email)**  
  - **POST** `/user/register`
  
- **User Modification (by ID)**  
  - **PUT** `/user/modify/:id`
  
- **User Deletion (by ID)**  
  - **DELETE** `/user/delete/:id`

**Request Body Example:**
```json
{
  "name": "John",
  "surname": "Doe",
  "email": "john.doe@example.com"
}
```

### Product Management

- **Product Creation (name)**  
  - **POST** `/product/register`
  
- **Product Modification (by ID)**  
  - **PUT** `/product/modify/:id`
  
- **Product Deletion (by ID)**  
  - **DELETE** `/product/delete/:id`

**Request Body Example:**
```json
{
  "name": "Macbook"
}
```

### Order Management

- **Order Creation (userId, productId)**  
  - **POST** `/order/register`
  
- **Order Modification (by ID)**  
  - **PUT** `/order/modify/:id`
  
- **Order Deletion (by ID)**  
  - **DELETE** `/order/delete/:id`

- **Get All Orders**  
  - **GET** `/order/all`
  
- **Filter Orders by Recent Date**  
  - **GET** `/order/recent`
  
- **Filter Orders by Older Date**  
  - **GET** `/order/old`
  
- **Filter Orders by Product Name**  
  - **GET** `/order/byproduct/name`

**Request Body Example:**
```json
{
  "users": ["676c31f5d6fe35e30b8efaeb"],
  "products": ["676c327ad6fe35e30b8efaf6"]
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)


