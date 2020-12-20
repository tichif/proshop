import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import productsRoutes from './routes/products.js';
import connectDB from './config/db.js';
import { error, notFound } from './middleware/error.js';

dotenv.config();

const app = express();

connectDB();

app.use('/api/products', productsRoutes);

app.use(notFound);

// Custom handling errors middleware
app.use(error);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port: ${PORT}`.yellow.bold
  );
});
