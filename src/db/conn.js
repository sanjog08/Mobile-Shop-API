const mogoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({path: './src/db/.env' });


mogoose.connect(process.env.URI)
.then(() => {
    console.log("database connected😊");
}).catch((err) => {
    console.log("database not connected 😒");
    console.log(err.message)
});