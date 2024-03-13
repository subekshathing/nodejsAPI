import mongoose from "mongoose";
const userName = "subeksha";
const password = encodeURIComponent("123");
const databaseName = "esports-amazon";

// const dbURL =
//   "mongodb+srv://subeksha:123@cluster0.3owaedv.mongodb.net/esports-broadway?retryWrites=true&w=majority&appName=Cluster0";
const dbURL = `mongodb+srv://${userName}:${password}@cluster0.3owaedv.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`;
const connectDb = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("Db connection established");
  } catch (error) {
    console.log(error.message);
    console.log("Db connection failed");
  }
};
export default connectDb;
