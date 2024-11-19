SDE Intern Task:-Car Management Application
This project is a NestJS-based API that includes product and user management, as well as authentication and product management means here car management i have refered the term product for a car. It provides a variety of RESTful endpoints for handling users and products, including features like user registration, login, product creation, and updating.

Table of Contents
Installation
API Documentation
Authentication
End-points Overview
User Endpoints
Product Endpoints
Swagger UI
Running the Project Locally
Installation
Clone the repository:

bash
Copy code
git clone 
Install the dependencies:

bash
Copy code
npm install
Create an .env file for environment variables (refer to .env.example for required fields like database credentials, JWT secrets, etc.).

Build and run the project:

bash
Copy code
npm run start
The app will be available at http://localhost:3000.

API Documentation
You can access the API documentation at the following route:

http://localhost:3000/api/docs
This route is powered by Swagger, which automatically generates documentation for all API routes based on the controllers and decorators in the code.

Swagger Features:
Request Parameters: All parameters (query, body, path) are documented.
Authentication: JWT authentication is included and documented in the Swagger UI.
Response Structure: Each route specifies possible response codes and their associated structures.
Authentication
Login
To authenticate, users need to provide their username and password to obtain a JWT token.

Route: POST /auth/login

Request Body:

userName: string (Required)
password: string (Required)
Response:

200 OK: If successful, returns the user information along with an authentication token.
401 Unauthorized: If the credentials are incorrect.
Example:
bash
Copy code
POST /auth/login
Content-Type: application/json

{
  "userName": "john_doe",
  "password": "password123"
}
Upon successful login, you will receive a JWT token that you can use to authenticate subsequent API requests. The token should be included in the Authorization header as a Bearer token.

bash
Copy code
Authorization: Bearer <access_token>
End-points Overview
User Endpoints
1. Create User
Route: POST /signUp
Description: Creates a new user.
Request Body: CreateUserDTO
Response:
201 Created: User successfully created.
400 Bad Request: Invalid input or username already taken.
2. Get All Users
Route: GET /
Description: Retrieves all users.
Response:
200 OK: List of all users.
404 Not Found: No users found.
3. Get User by ID
Route: GET /:id
Description: Retrieves a user by their ID.
Path Parameter:
id: string (Required)
Response:
200 OK: User details found.
404 Not Found: User not found.
Product Endpoints
1. Create Product
Route: POST /products
Description: Creates a new product, optionally uploading an image.
Request Body: CreateProductDTO
Request Parameters:
image: Optional image file (jpg, jpeg, png)
Response:
201 Created: Product successfully created.
400 Bad Request: Invalid product data or image format.
2. Get All Products
Route: GET /products
Description: Retrieves all products.
Response:
200 OK: List of all products.
404 Not Found: No products found.
3. Get Product by ID
Route: GET /products/:id
Description: Retrieves a product by its ID.
Path Parameter:
id: string (Required)
Response:
200 OK: Product details found.
404 Not Found: Product not found.
4. Update Product
Route: PUT /products/:id
Description: Updates a product by its ID.
Path Parameter:
id: string (Required)
Request Body: UpdateProductDTO
Response:
200 OK: Product successfully updated.
400 Bad Request: Invalid product data.
5. Delete Product
Route: DELETE /products/:id
Description: Deletes a product by its ID.
Path Parameter:
id: string (Required)
Response:
200 OK: Product successfully deleted.
404 Not Found: Product not found.
Swagger UI
Swagger is integrated with this application for automatic API documentation.

How to Use Swagger UI:
Start the application by running npm run start.
Open a browser and navigate to http://localhost:3000/api/docs.
The Swagger UI will display all the available routes.
You can test the endpoints directly from the Swagger UI by providing the required parameters and clicking "Execute".
Authentication in Swagger UI
After logging in successfully with the /auth/login endpoint, you can copy the access_token and use it in Swagger by clicking on the Authorize button.
In the "Authorize" modal, paste the Bearer <access_token> in the token field to authenticate further requests.
Running the Project Locally
Clone the repository:

Install the dependencies:

bash
Copy code
npm install
Create an .env file with the necessary configuration (check .env.example).

Start the application:

bash
Copy code
npm run start
The API will be available at http://localhost:3000.

this readme is generated by chatgpt sorry i dont have much time to write it.I can write it better if i you gave me more time.Hi,I have completed the task. lets have a quick call and discuss the code.