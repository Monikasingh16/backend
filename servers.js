//  import Required dependencies like express, cors, dotenv
// CORS is like a security guard that controls which frontend websites can access your backend API

// dotenv

//  its load the environment variable from the .env file
//  help to store the sensetive credtiential --> store the database password, api key so that the sensentive data is not exposed in the code



//  cors
//  app.use(cors());
// Allows all frontend requests
//  app.use(cors({ origin: "http://localhost:3000" })); // Allows only from this frontend



//app with express const app = express(); 


// Routes holds the endpoints

// which maps to controller which contains the logic and database query



// EXPRESS()
//  express is web framework which helps us to manage the http request



//  Middleware --> why we use the middle ware
//  Middleware in Express processes requests before they reach your routes. Think of it as a security checkpoint that modifies or validates incoming requests before they reach the actual API logic.
// CORS (Cross-Origin Resource Sharing) allows your frontend (React app) to communicate with your backend.
// Without cors(), browsers block requests from different domains (like http://localhost:3000 to http://localhost:5000).
// This middleware removes this restriction so your frontend can call backend APIs.



// app.use(express.json())
// Parses the incoming json data
// when the frontend send data to the backend like using the post method then it sends in the json format so the express.json 
//express.json convert the json format into javascript object so that backend can understand it





//  app.use("/products", productRoutes);	Connects all product-related API routes
//  app.listen(port, () => {...});	Starts the backend server and listens for requests





const express = require("express");   // import the webframe work express
const cors = require("cors");    //import cors to allow the frontend requests
require("dotenv").config();     // Load the environment variable from the .env file
const productRoutes = require("./routes/Productroutes");  // import product related rotues



const app = express();  // creating a backend server using express

const port = process.env.PORT || 5000;  


//  need to kill the server running on the 5000



// Initializes  Middleware== security checkpoint


app.use(cors());
app.use(express.json());




// Routes
// Defining Routes
// Get


app.use("/products", productRoutes);

// Start Server


app.listen(port, () => {

  console.log(`🚀 Server running on http://localhost:${port}`);

});


