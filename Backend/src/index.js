import app from './app.js';
import {connectDB} from './db.js'
import dotenv from 'dotenv';

dotenv.config();



connectDB();
app.listen(process.env.PORT || 5050)
console.log('server listening on port',4000)