const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_COMPASS || process.env.MONGODB_URI,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Mongodb Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
