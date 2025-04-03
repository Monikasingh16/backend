const db = require("../config/db");



// Get all products


exports.getAllProducts = (req, res) => {

  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ message: "Server Error" });
      return;
    }
    res.json(results);
  });
};








// Get single product by ID

exports.getProductById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error fetching product:", err);
      res.status(500).json({ message: "Server Error" });
      return;
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(results[0]);
  });
};







// Add a new product

exports.addProduct = (req, res) => {
  const { name, price, image } = req.body;
  db.query(
    "INSERT INTO products (name, price, image) VALUES (?, ?, ?)",
    [name, price, image],
    (err, result) => {
      if (err) {
        console.error("Error adding product:", err);
        res.status(500).json({ message: "Server Error" });
        return;
      }
      res.status(201).json({ message: "Product added successfully", id: result.insertId });
    }
  );
};




// Update a product in the database

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;
  db.query(
    "UPDATE products SET name = ?, price = ?, image = ? WHERE id = ?",
    [name, price, image, id],
    (err, result) => {
      if (err) {
        console.error("Error updating product:", err);
        res.status(500).json({ message: "Server Error" });
        return;
      }
      res.json({ message: "Product updated successfully" });
    }
  );
};






// Delete a product

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting product:", err);
      res.status(500).json({ message: "Server Error" });
      return;
    }
    res.json({ message: "Product deleted successfully" });
  });
};
