const mongoose = require("mongoose");

const earphoneSchema = new mongoose.Schema({
    name: {
        type: String
    },
    file: {
        type: Buffer, // Store file content as Buffer
    },
    bluetooth: {
        type: String,
    },
    battery: {
        type: String
    },
    colour: {
        type: String
    },
    price: {
        type: Number
    }
});

const EarphoneUpload = mongoose.model("Earphone", earphoneSchema);
module.exports = EarphoneUpload;