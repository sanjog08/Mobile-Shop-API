const mongoose = require("mongoose");

const mobile2Schema = new mongoose.Schema({
    name: {
        type: String,
    },
    file: {
        type: Buffer, // Store file content as Buffer
    },
    RAM: {
        type: String
    },
    storage: {
        type: String
    },
    camera: {
        type: String
    },
    price: {
        type: Number
    },
    warranty: {
        type: String
    }
});

const Mobile2Upload = mongoose.model("2nd-Mobile", mobile2Schema);
module.exports = Mobile2Upload;