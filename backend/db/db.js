const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://iamkrishna:wOZrHICaI6Qv9vxT@cluster0.y7z7ajt.mongodb.net/agumentik?retryWrites=true&w=majority")
module.exports = connection;