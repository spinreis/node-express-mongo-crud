# Node/Express/Mongo CRUD with TypeScript and Authentication with JWT

## Project Description
This project is an adaptation to TypeScript of a REST API course project developed by Leonardo Castillo and uploaded to [freeCodeCamp Español's YouTube channel](https://www.youtube.com/watch?v=Oa5blAV7Fyg&pp=ygUUY3J1ZCBtb25nb2RiIG5vZGUganM%3D)
to practice and demonstrate modern backend development skills.  

It consists of an app for adopting pets (like dogs or cats) and it allows users to register, login, see their profiles, submit pets to adoption or delete them of the database.

It implements all CRUD (Create, Read, Update, Delete) operations, using TypeScript for better scalability and maintainability, and securing routes with JWT Authentication
(JSON Web Tokens). The database used is MongoDB, via Mongoose, an ODM for building schemas and validate the received data.

### Key Technologies
* **Backend Runtime:** Node.js  
* **Framework:** Express  
* **Language:** TypeScript  
* **Database:** MongoDB (via Mongoose)  
* **Authentication:** JSON Web Tokens (JWT)  

## Table of Contents
1. #### [Prerequisites](#Prerequisites)
2. #### [Installation and Setup](#InstalationSetup)
3. #### [Usage and Execution](#UsageExecution)
4. #### [API Routes](#APIRoutes)
5. #### [Contributing](#Contributing)
6. #### [License](#License)

<h2 id="Prerequisites">1. Prerequisites</h2>

Make sure you have the following software installed on your system:

* Node.js (version 18 or higher recommended)
* npm (comes bundled with Node.js)
* A MongoDB instance (local or cloud-based, like MongoDB Atlas).

<h2 id="InstalationSetup">2. Installation and Setup</h2>
Follow these steps to get a local copy of the project up and running:

### Clone the Repository
  
    $ git clone https://github.com/spinreis/node-express-mongo-crud.git
    $ cd node-express-mongo-crud

### Install Dependencies
    node-express-mongo-crud $ npm install
    
### Environment Configuration (.env archive)
This project uses environment variables to handle sensitive configuration as the database connection string and the JWT secret key.

1. Create a file named `.env` in the project root directory.

2. Copy the content from the `.env.template` file and paste it into your new `.env` file.

3. Modify the variables with your own values:

#### New `.env` Content:

    #Port on which the API will run (e.g., 3000 or 8080)
    PORT=[DEFAULT_PORT_OR_YOUR_CHOICE] 

    # Connection string for your MongoDB database
    MONGO_URI="mongodb://127.0.0.1:27017/your_db_name"
    
    # Secret key for signing JWTs. Must be a long, secure string.
    JWT_SECRET_TOKEN="your_secure_secret_key_here"

    # Credentials for DB connection
    DB_USER="your_user"
    DB_PASSWORD="your_pass"
    DB_NAME="name_for_the_db"
    
<h2 id="UsageExecution">3. Usage and Execution</h2>  

### Development Mode (with Hot Reload)
Use `npm run dev` to run the application using `node --watch src/app.ts`. This will automatically restart the server whenever you save a file.

    $ npm run dev

### Compiling to JavaScript ***(Currently in development)***
To compile the TypeScript code to JavaScript and then run it in a production environment:

    # Compiles TS code to JS in the 'dist' folder
    npm run build 

    # Executes the compiled code
    npm start

Once the server is running, the API will be available at `http://localhost:[PORT].`

<h2 id="APIRoutes">4. API Routes</h2>
As this is a CRUD REST API with JWT authentication, the core routes include:

| Method | Route           | Description                                              | Requires Auth  | Finished     |
|--------|-----------------|----------------------------------------------------------| :-----------:  | :----------: |
| GET    | /pets           | Shows all pets                                           | ❌ No         | ✅ Yes       |
| GET    | /pets/:id       | Shows the pet with the id provided by the request object | ❌ No         | ✅ Yes       |
| POST   | /pets           | Creates a new pet                                        | ❌ No         | ✅ Yes       |
| PUT    | /pets/:id       | Edits the pet by id                                      | ✅ Yes        | ✅ Yes       |
| DELETE | /pets/:id       | Deletes the pet by id                                    | ✅ Yes        | ✅ Yes       |
| GET    | /users/profiles | Shows the current users profile                          | ✅ Yes        | ❌ No        |
| POST   | /users/login    | Allows the user to log in, using JWT                     | ❌ No         | ✅ Yes       |
| POST   | /users/register | Creates a new user                                       | ❌ No         | ✅ Yes       |
| PUT    | /users/edit     | Edits the user                                           | ✅ Yes        | ❌ No        |
| DELETE | /users/delete   | Deletes the user                                         | ✅ Yes        | ❌ No        |

<h2 id="Contributing">5. Contributing</h2> 
Contributing is allowed, if you want to practice with the project.

#### To contribute:

##### 1. Fork the project.

##### 2. Create your Feature Branch (git checkout -b feature/yourFeature).

##### 3. Commit your Changes (git commit -m 'Add some feature').

##### 4. Push to the Branch (git push origin feature/yourFeature).

##### 5. Open a Pull Request.

<h2 id="License">6. License</h2>
This project is distributed under the MIT License. See the <code>LICENSE</code> file. You are free to clone, fork and make any changes you want.  

<h2>Contact</h2>
You can contact me with any of the following resources:

* Instagram: <a href="https://www.instagram.com/spinreis/" target="_blank">@spinreis</a>  

* GitHub: <a href="https://github.com/spinreis" target="_blank">My GitHub profile</a>

<div style="color: gray;" align=center>2025, Luis Pinto</div>
