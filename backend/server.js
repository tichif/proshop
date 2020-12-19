const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const productsRoutes = require('./routes/products');

const app = express();

app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} on port: ${PORT}`);
});
