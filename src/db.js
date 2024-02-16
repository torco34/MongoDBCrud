import mongoose from "mongoose";

export const connectBd = () => {
  try {
    mongoose.connect(
      "mongodb+srv://monkeywi:luis16@cluster0.5yhbbmx.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("db er consoles fffff");
  } catch (error) {
    console.error(error);
    console.log("error");
  }
};
