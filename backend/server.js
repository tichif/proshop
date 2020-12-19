import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import productsRoutes from './routes/products.js';

const app = express();

app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} on port: ${PORT}`);
});
