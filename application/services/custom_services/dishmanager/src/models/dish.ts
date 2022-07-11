
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const dishSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   enter_name: String
})

const dishModel = mongoose.model('dish', dishSchema, 'dish');
export default dishModel;
