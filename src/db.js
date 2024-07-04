import mongoose from "mongoose";

export const connectBd = () => {
  try {
    mongoose.connect(
      "mongodb+srv://luis:g2dbTjD1h0lwbGdI@cluster0.5yhbbmx.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("db er consoles fffff");
  } catch (error) {
    console.error(error);
    console.log("error");
  }
};
