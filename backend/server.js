const express = require('express');

const productsRoutes = require('./routes/products');

const app = express();

app.use('/api/products', productsRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
