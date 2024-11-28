import { Document } from "mongoose";
import * as mongoose from "mongoose";

export interface Users extends Document {

    readonly _id: mongoose.Schema.Types.ObjectId,
    readonly name: String,
    readonly email: String,
    readonly password: String,
    readonly decks: [String],
}
