import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import memberRoutes from './routes/members.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/members', memberRoutes);

const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', false).connect('mongodb+srv://nooblord:nooblord69@first-cluster.b4w3yji.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`)))
    .catch((error) => console.log(error));