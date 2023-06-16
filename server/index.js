import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import express from 'express';

import routes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', routes);

const CONNECTION_URL = 'mongodb+srv://yoyo:Password1@testdb.1ajchri.mongodb.net/';

const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server Started on Post: ${PORT}`)))
    .catch((error) => console.log(error.message));