import express from 'express'

import morgan from 'morgan'

import dotenv from 'dotenv';

import productsRoutes from "./routes/product";

const app = express();

dotenv.config();
app.use(morgan('dev'));
app.use('/api', productsRoutes);


//router
app.use(morgan('dev'));

//listen
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log('sever is runing port ', port);
})