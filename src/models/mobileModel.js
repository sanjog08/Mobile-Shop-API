const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
    name: {
        type: String
    },
    file: {
        type: Buffer // Store file content as Buffer
    },
    RAM: {
        type: String
    },
    storage: {
        type: String
    },
    price: {
        type: Number
    },
    camera: {
        type: String
    }
});

const MobileUpload = mongoose.model("Mobile", mobileSchema);
module.exports = MobileUpload;