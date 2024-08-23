const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, { // Change to process.env.MONGO_URL
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connection established: " + conn.connection.host);
    } catch (error) {
        console.error("Connection error: " + error);
        process.exit(1); // Use 1 to indicate error exit code
    }
};

module.exports = connectDatabase;
