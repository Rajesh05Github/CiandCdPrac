import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://akashkanojia903:dtMUgHwKt0eqD9yz@cluster0.a3dwlew.mongodb.net/test?retryWrites=true&w=majority");
    console.log("DB Connected");
  } catch (err) {
    console.error("Connection failed:", err.message);
    process.exit(1); // exit with failure code
  }
};
