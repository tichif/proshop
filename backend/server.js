import path from 'path';

import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import productsRoutes from './routes/products.js';
import usersRoutes from './routes/users.js';
import ordersRoutes from './routes/orders.js';
import uploadsRoutes from './routes/uploads.js';
import connectDB from './config/db.js';
import { error, notFound } from './middleware/error.js';

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/uploads', uploadsRoutes);

app.use('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// Make static folder
const __dirname = path.resolve(); // only for module syntax in ES6
app.use('/uploads', express.static(path.join(__dirname, 'backend', 'uploads')));

app.use(notFound);

// Custom handling errors middleware
app.use(error);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port: ${PORT}`.yellow.bold
  );
});
