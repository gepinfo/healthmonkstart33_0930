
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const mealsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const mealsModel = mongoose.model('meals', mealsSchema, 'meals');
export default mealsModel;
