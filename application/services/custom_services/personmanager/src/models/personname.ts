
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const personnameSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   firstname: String
})

const personnameModel = mongoose.model('personname', personnameSchema, 'personname');
export default personnameModel;
