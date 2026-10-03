const mongoose = require("mongoose");

const MONOGDB_URL = process.env.MONOGDB_URL;
const PORT = process.env.PORT;

async function connectDB(app) {
    return mongoose.connect(MONOGDB_URL)
        .then(() => {
            console.log("Connected To DB Successfully");
            
            app.listen(PORT, () => {
                console.log(`Server is Running on: http://localhost:${PORT}`);
            })
    });
}

module.exports = connectDB