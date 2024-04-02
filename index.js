/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/*
 * Title: Youtube Application
 * Description: A Backend Application With Express JS
 * Author: Md Naim Uddin
 * Date: 1/04/2024
 *
 */

// dependencies
import dotenv from 'dotenv';
import http from 'http';
import app from './src/app.js';
import connectDB from './src/db/index.js';

dotenv.config();
const server = http.createServer(app);
const port = process.env.PORT || 5000;

(async () => {
    try {
        await connectDB();
        app.on('error', (err) => {
            console.log('ERROR: ', err);
            throw err;
        });
        server.listen(port, () => {
            console.log(`⚙️  Server is running at port : ${port}`);
        });
    } catch (error) {
        console.log(`Server error: ${error}`);
    }
})();
