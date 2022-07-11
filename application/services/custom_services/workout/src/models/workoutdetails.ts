
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const workoutdetailsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   morning_time: String
})

const workoutdetailsModel = mongoose.model('workoutdetails', workoutdetailsSchema, 'workoutdetails');
export default workoutdetailsModel;
