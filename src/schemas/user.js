import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password:{type: String,  require: true},
    createdAt:{type: Date, default: Date.now()}
});

export default model("users", UserSchema);