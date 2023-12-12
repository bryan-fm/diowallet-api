import mongoose from "mongoose";

export async function connectDb() {
    const mongoUrl = "mongodb+srv://admin:admin@dio.mntmzh5.mongodb.net/?retryWrites=true&w=majority";

    try{
        await mongoose.connect(mongoUrl);
        console.log("MongoDB Atlas connected!");
    }
    catch(err) {
        console.log(err.message);
    }
}

export async function disconnectDb() {
    await mongoose.disconnect();
}