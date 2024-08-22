# HexaHealth-API
# CRUD API with Express and MongoDB

## Overview

This repository contains a basic CRUD API built with Express.js and MongoDB using Mongoose. The API allows you to perform Create, Read, Update, and Delete operations on `Product` entities.

## Project Structure

The project is organized into the following main parts:

1. **`index.js`**: Main entry point for the application.
2. **`models/product.model.js`**: Mongoose schema and model for `Product`.
3. **`package.json`**: Configuration file for managing dependencies and scripts.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (Cloud or Local)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. Navigate into the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Update the MongoDB connection string in `index.js` with your own MongoDB connection details.

   ```javascript
   mongoose.connect("mongodb+srv://<your-username>:<your-password>@<your-cluster>/<your-database>?retryWrites=true&w=majority")
   ```

### Running the Application

To start the server, use one of the following commands:

- For development with automatic restarts on file changes:

  ```bash
  npm run dev
  ```

- For production:

  ```bash
  npm run serve
  ```

The server will be running on `http://localhost:3000`.

## API Endpoints

### Base URL

`http://localhost:3000/api/products`

### Endpoints

- **Get All Products**
  
  **URL:** `/api/products`

  **Method:** `GET`

  **Response:** Returns a list of all products.

- **Get Single Product**

  **URL:** `/api/product/:id`

  **Method:** `GET`

  **URL Params:**
  - `id` - The ID of the product to retrieve.

  **Response:** Returns the product with the specified ID.

- **Create Product**

  **URL:** `/api/products`

  **Method:** `POST`

  **Body Params:**
  - `name` (String, required) - Name of the product.
  - `quantity` (Number, required) - Quantity of the product.
  - `price` (Number, required) - Price of the product.
  - `image` (String, optional) - URL of the product image.

  **Response:** Returns the created product.

- **Update Product**

  **URL:** `/api/product/:id`

  **Method:** `PUT`

  **URL Params:**
  - `id` - The ID of the product to update.

  **Body Params:** Same as for Create Product.

  **Response:** Returns the updated product.

- **Delete Product**

  **URL:** `/api/product/:id`

  **Method:** `DELETE`

  **URL Params:**
  - `id` - The ID of the product to delete.

  **Response:** Returns a success message if the product is deleted.

## Files Description

### `index.js`

The main entry point for the application. This file:

- Initializes the Express application.
- Sets up middleware (e.g., `express.json()` for parsing JSON requests).
- Defines API routes.
- Connects to the MongoDB database.

### `models/product.model.js`

Defines the Mongoose schema and model for `Product`. The schema includes:

- `name` (String, required)
- `quantity` (Number, required, default: 0)
- `price` (Number, required, default: 0)
- `image` (String, optional)

### `package.json`

Manages project dependencies and scripts. It includes:

- Dependencies: `express`, `mongodb`, `mongoose`
- DevDependencies: `nodemon`
- Scripts: `test`, `serve`, `dev`

## Contributing

Feel free to fork the repository and submit pull requests. For major changes or feature requests, please open an issue to discuss.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

---
