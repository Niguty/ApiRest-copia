import { Schema } from "mongoose";

export const userSchema = new Schema({
    
    name: String,
    email: String,
    password: String,
    decks: [String],
})