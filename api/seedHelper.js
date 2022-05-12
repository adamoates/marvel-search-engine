const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/comics', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error!"));

db.once("open", () => {
    console.log("Database Connection")
});
