import { Schema, model } from "mongoose";

const TransactionSchema = new Schema({
    value: {type: Number, require: true},
    description: {type: String, require: true},
    type:{type: String,  require: true},
    userId: {type: Schema.Types.ObjectId, required: true, ref: "users"},
    createdAt:{type: Date, required: true, default: Date.now()}
});

export default model("transactions", TransactionSchema);