// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql2");
// require("dotenv").config();



// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());



// // MySQL Connection

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root", 
//   password: "root", 
//   database: "ecommerce"
// });



// // Connect to MySQL
// db.connect(err => {
//   if (err) {
//     console.error("Database connection failed:", err);
//     return;
//   }
//   console.log("Connected to MySQL database.");
// });

// // Get all products
// app.get("/products", (req, res) => {
//   db.query("SELECT * FROM products", (err, results) => {
//     if (err) {
//       console.error("Error fetching products:", err);
//       res.status(500).send("Server Error");
//       return;
//     }
//     res.json(results);
//   });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
