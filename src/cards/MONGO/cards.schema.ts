import { Schema } from "mongoose";

export const cardsShema = new Schema({
    
    ideck: String,
    commander: String,
    deck: [String],
})