import { Document } from "mongoose";
import * as mongoose from "mongoose";

export interface Cards extends Document {
    
    readonly _id : mongoose.Schema.Types.ObjectId;
    readonly ideck : String;
    readonly commander : String;
    readonly deck :String[];
}