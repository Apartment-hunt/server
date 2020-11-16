import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import recentHouse from './routes/recentHouse.js';
import booking from './routes/booking.js';

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(bodyParser.json({limit : '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit : '30mb', extended: true}));
app.use(cors());

app.use('/house',recentHouse);
app.use('/booking',booking);

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1hh0e.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT ,() =>console.log(`server running this port ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify' ,false);