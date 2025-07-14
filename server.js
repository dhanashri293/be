const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const products = [
  { id: 1, name: "Laptop Pro", category: "Electronics", price: 1200 },
  { id: 2, name: "T-shirt Red", category: "Clothing", price: 20 },
  { id: 3, name: "Gaming Mouse", category: "Electronics", price: 50 },
  { id: 4, name: "Running Shoes", category: "Footwear", price: 80 },
  { id: 5, name: "Jeans Blue", category: "Clothing", price: 40 }
];

app.get('/api/products', (req, res) => {
  try {
    const searchTerm = req.query.search?.toLowerCase() || '';
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    res.json({ products: filtered });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
